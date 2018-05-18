$(document).on("submit", "#entries-form", handleEntriesFormSubmit);

 // A function to handle what happens when the form is submitted to create a new Author
 function handleEntriesFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    upsertAuthor({
      name: nameInput
        .val()
        .trim()
    });
  }