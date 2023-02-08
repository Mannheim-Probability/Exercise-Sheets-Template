// https://stackoverflow.com/a/65090521/6662425
function changeTag (node, tag) {
	const clone = document.createElement(tag);
	for (const attr of node.attributes) {
	  clone.setAttributeNS(null, attr.name, attr.value);
	}
	while (node.firstChild) {
	  clone.appendChild(node.firstChild);
	}
	node.replaceWith(clone);
	return clone;
}

window.addEventListener("load", function() {
	const proofs = document.getElementsByClassName("ltx_proof");

	if(proofs.size != 0){
		for(let proof of proofs) {
			proof = changeTag(proof, "details");
			proof_name = changeTag(proof.children[0], "summary");
			// ltx_runin adds display=inline CSS which removes the open arrow
			// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#customizing_the_disclosure_widget
			proof_name.classList.remove("ltx_runin");
		}
	}
})
