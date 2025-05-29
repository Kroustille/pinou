const {
  createProjectGraphAsync,
  readCachedProjectGraph,
  detectPackageManager,
  writeJsonFile,
} = require('@nx/devkit');
const {
  createLockFile,
  createPackageJson,
  getLockFileName,
} = require('@nx/js');
const { writeFileSync } = require('fs');

async function main() {
  const projectShortName = process.argv[2]
  if (!projectShortName) {
    throw new Error('usage: node create-package-json [project-short-name]')
  }
  const outputDir = `apps/${projectShortName}/dist`;
  const pm = detectPackageManager();
  let projectGraph = readCachedProjectGraph();
  if (!projectGraph) {
    projectGraph = await createProjectGraphAsync();
  }
  const projectName = `@pinou/${projectShortName}`;
  const packageJson = createPackageJson(projectName, projectGraph, {
    isProduction: true,
    root: projectGraph.nodes[projectName].data.root,
  });

  const lockFile = createLockFile(
    packageJson,
    projectGraph,
    detectPackageManager()
  );

  const lockFileName = getLockFileName(pm);

  writeJsonFile(`${outputDir}/package.json`, packageJson);
  writeFileSync(`${outputDir}/${lockFileName}`, lockFile, {
    encoding: 'utf8',
  });
}

main();