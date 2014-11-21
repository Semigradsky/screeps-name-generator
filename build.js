var buildify = require('buildify');

buildify()
  .concat(['lib/human/index.js', 'lib/human/firstname.js', 'lib/human/lastname.js'])
  .save('build/human.tmp');

buildify()
  .concat(['build/human.tmp'])
  .wrap('lib/index.js')
  .save('build/nameGenerator.js')
  .uglify()
  .save('build/nameGenerator.min.js');
