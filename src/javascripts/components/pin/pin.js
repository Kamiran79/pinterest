const pinMaker = (pin) => {
  const domString = `
    <div class="col-3">
      <div class="card border-0 rounded-0 bg-dark text-light" id=${pin.id}>
        <img class="card-img-top" src="${pin.imgURL}" alt="Card image cap">      
        <div class="card-body">
          <h5 class="card-title">${pin.pinTitle}</h5>
          <button class="btn btn-danger delete-pin"><i class="far fa-trash-alt"></i>  Delete Pin</button>
        </div>
      </div>
    </div>  
  `;

  return domString;
};

export default { pinMaker };
