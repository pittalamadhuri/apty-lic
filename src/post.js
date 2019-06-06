$("#form").submit(function (event) {
    $.post('/route', $("#form").serialize(), function (data) {
       console.log(data) //data is the response from the backend
    });
    event.preventDefault();
  });