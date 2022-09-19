function generateCardsHtml(arrCards){
    console.log("aqui mero", arrCards);
    let html = "";

    let htmlBaseStart = `
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./dis/css/cards.css">
    <title>Employee Information Cards</title>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand text-white" href="#">Company Personel</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
          <a class="nav-link text-white hover-overlay hover-zoom hover-shadow ripple" href="index.html">Home<span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>

    <section id="divCards" class="d-flex flex-wrap">
    `


    let htmlCards = arrCards.map(card => {
        switch(card.employeeRole) {
            case "Manager":
              return `
                <div class="card d-flex flex-wrap" style="width: 18rem;">
                  <img src="./dis/img/User-avatar.png" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">${card.employeeName}</h5>
                      <p class="card-text">Description: Supervise the engineers, and train the interns</p>
                  </div>
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">Role: ${card.employeeRole}</li>
                      <li class="list-group-item">ID: ${card.employeeId}</li>
                      <li class="list-group-item">Office Number: ${card.officeNumber}</li>
                  </ul>
                  <div class="card-body">
                      <a href = "mailto:${card.employeeEmail}">Send Email</a>
                  </div>
                </div>
                `
              break;
            case "Engineer":
                return `
                <div class="card d-flex flex-wrap" style="width: 18rem;">
                  <img src="./dis/img/User-avatar.png" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">${card.employeeName}</h5>
                      <p class="card-text">Description: Develop technical solutions to problems</p>
                  </div>
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">Role: ${card.employeeRole}</li>
                      <li class="list-group-item">ID: ${card.employeeId}</li>
                  </ul>
                  <div class="card-body">
                      <a href = "mailto:${card.employeeEmail}">Send Email</a>
                      <a href = "https://github.com/${card.engineerGithub}">Github</a>
                  </div>
                </div>
                `
              break;
            case "Intern":
                return `
                <div class="card d-flex flex-wrap" style="width: 18rem;">
                  <img src="./dis/img/User-avatar.png" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">${card.employeeName}</h5>
                      <p class="card-text">Description: Student trainee for future contract.</p>
                  </div>
                  <ul class="list-group list-group-flush">
                      <li class="list-group-item">Role: ${card.employeeRole}</li>
                      <li class="list-group-item">ID: ${card.employeeId}</li>
                      <li class="list-group-item">School: ${card.internSchoool}</li>
                  </ul>
                  <div class="card-body">
                      <a href = "mailto:${card.employeeEmail}">Send Email</a>
                  </div>
                </div>
                `
            break;
        }
    }).join('\n')



    let htmlBaseEnd = `
        </section>

        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    `

    

    html = html.concat(htmlBaseStart, htmlCards, htmlBaseEnd);

    // console.log("JORGE", html);

    return html;
}

module.exports = generateCardsHtml;