$(function() {
  function initSort() {
    $(".column").sortable({
      connectWith: ".column",
      handle: ".list_header"
    });
  }
  initSort();

  $("#new-list").submit(function(event) {
      event.preventDefault(); //Don't post
    var formData = $(event.target).serializeArray();
    var newColumn = `
    <div class="column">
            <div class="list">
                <div class="list_header">
                    Done
                </div>
                <button class="delete">Delete</button>
                <ul class="list_cards">
                    <li class="card">
                        Card #3
                    </li>
                </ul>
            </div>
        </div>
    `;
    $('.board').append(newColumn);
    initSort();
  });

  $('body').on('click', '.list_header .delete', function() {
    $(event.target).closest('.list').remove();
  });
  $('body').on('click', '.list_cards .add_new .add', function(event) {
      var newCard = `
      <li class="card">
      New card
      <button class="delete">X</button>
      </li>
      </div>`
  });
});
