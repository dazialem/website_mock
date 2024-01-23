function deleteNote(noteId) {
    fetch("/delete-note", {
        method: "POST",
        body: JSON.stringify({ noteId: noteId }),
    }).then((_res) => {
    window.location.href = "/"; // redirect to the home route (which has "/")
    });
}