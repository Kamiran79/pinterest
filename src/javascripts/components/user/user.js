const userMaker = (user) => {
  const domString = `
    <div class="col-3">
      <div class="card myco-card border-0 rounded-0" id=${user.id}>
        <div class="card-body">
          <h5 class="card-title text-center">${user.name}</h5>
        </div>
        <div class="card-footer">
         <small class="text-muted">They are ${user.age} years old</small>
        </div>
      </div>
    </div>    
  `;

  return domString;
};

export default { userMaker };
