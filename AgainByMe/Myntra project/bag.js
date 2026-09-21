// onLoad();
let bagItemObjects;
onLoad();


function onLoad(){
  loadBagItemObjects();
  displayBagItems();
}

function loadBagItemObjects(){
  console.log(bagItems);

   bagItemObjects = bagItems.map(itemId => {
    for(let i =0; i <items.length; i++){
      if (itemId === items[i].id) {
        return items[i];
      }
    }
  });
  console.log(bagItemObjects);
}

function displayBagItems(){
    let containerElement = document.querySelector('.bag-tems-container');
    let innerHTML = ``;
    bagItemObjects.forEach(bagItem => {
      innerHTML += generateItemHtml(bagItem);
    });
    containerElement.innerHTML = innerHTML;
   }
function generateItemHtml(item){
  return `
        <div class="bag-items-container">
          <div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="${item.image}">
            </div>
            <div class="item-right-part">
              <div class="company">${item.company}</div>
              <div class="item-name">${item.item_name}</div>
              <div class="price-container">
                <span class="current-price">${item.current_price}</span>
                <span class="original-price">${item.original_price}</span>
                <span class="discount-percentage">(${item.discount_oercentage}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item.return_period}</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.delivery_date}</span>
              </div>
            </div>

            <div class="remove-from-cart">X</div>
          </div>`;
}