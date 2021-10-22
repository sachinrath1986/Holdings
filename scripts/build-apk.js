const shell = require('shelljs');

shell.echo(`Current PATH: ${shell.pwd()}`);

shell.echo('Building APK for app...');

shell.exec(`${shell.pwd()}/scripts/build-apk.sh`, (err) => {
  if (err) {
    shell.echo(err);
    process.exit(0);
  } else {
    shell.echo(
      'Unsigned-Apk Generated Successfully! [PATH: ./android/app/build/outputs/apk/release]'
    );
  }
});
