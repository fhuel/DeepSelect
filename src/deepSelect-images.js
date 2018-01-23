export default function(context) {
  context.document.showMessage("selectGroups");
  const sketch = context.api();
  const document = sketch.selectedDocument;
  const selection = document.selectedLayers;

  // console.log(sketch.Group);
  if (selection.isEmpty) {
    context.document.showMessage("No layers are selected.");
  } else {
    selection.iterate(item => {
      item.iterate(content => {
        if (content.isImage) {
          content.addToSelection();
        }
      });
      item.deselect();
    });
  }
}