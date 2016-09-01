var fs = require("fs"); //nodeJS에 있는 js

module.exports = function(req, res, layoutName, context) {
	var baseResource 	= fs.readFileSync("./layout/base.html", "utf-8");
	var headerResource 	= fs.readFileSync("./layout/header.html", "utf-8");
	var footerResource 	= fs.readFileSync("./layout/footer.html", "utf-8");
	var contentResource = fs.readFileSync("./layout/" + layoutName + ".html", "utf-8");

	resultResource = baseResource.replace("{% header %}", headerResource);
	resultResource = resultResource.replace("{% footer %}", footerResource);
	resultResource = resultResource.replace("{% content %}", contentResource);

	res.write(resultResource);
	res.end();
}
