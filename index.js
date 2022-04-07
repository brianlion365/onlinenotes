function deleteNote(noteId) {
    fetch("/delete-note", {
        method: "POST",
        body: JSON.stringify({ noteID: NoteId}),
    }).then((_res) => {
        window.location.href="/";
    });
}



//THAT FUNCTION delete the note using Javascript