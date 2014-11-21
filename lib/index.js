var name = {};

function random(a) {
  return Math.floor(Math.random() * a);
}

{{body}}

module.exports = function (opts) {
  opts = opts || {};
  var type = opts.type || "human";
  return name[type] ? name[type]() : "";
};
