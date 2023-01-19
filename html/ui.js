var warenkorb = [];
var itemlist = [];

$(document).ready(function () {
  AddItem("clip", "VW GOLF", 10000);
  AddItem("bulletproof", "Weste", 10000);
  AddItem("fixtool", "Repairkit", 10000);
  AddItem("phone", "Handy", 10000);
  AddItem("firstaidkit", "Erste-Hilfe", 10000);
  /* window.addEventListener('message', function( event ) {      
      if (event.data.action == 'open') {

        const warenkorb1 = document.getElementById("warenkorb-list");
        warenkorb1.innerHTML = '';
        warenkorb = []

        $('#warenkorb-1').text('$0.0');
        $('#warenkorb-2').text('$0.0');

        $('.container').fadeIn(300)        
        $('.container').css('display', 'block');        

      } else if (event.data.action == 'add') {
                
        AddItem(event.data.name, event.data.display, event.data.price);       

      } else {
        $('.container').fadeOut(300)
      }
    });

    $( ".close" ).click(function() {
      $('.container').fadeOut(300)
      $.post('http://police_shop/escape', JSON.stringify({}));
    }); */
});

function RemoveItemFromBasket(id, name, display, price) {
  document.getElementById(`ware-${id}`).remove();

  for (ware of warenkorb) {
    if (ware.id === name) {
      console.log("1");
      warenkorb.pop(id);
    }
  }
  console.log(warenkorb);
}

function AddWarenkorb(name, display, price) {
  let id = Math.random().toString(36).slice(2);
  warenkorb.push({id: id, name: name, display: display, price: price });

  $(".warenliste").append(`
  <div class="ware" id="ware-${id}">
  <img src="items/${name}.png">
  <h1>${display}</h1>
  <span>${price}$</span>
  
  <i class="fa-solid fa-square-xmark" onclick="RemoveItemFromBasket('${id}','${name}', '${display}', ${price})"></i>
  </div>
  `);

  /* var current = $('#warenkorb-1').text();
  var current2 = current.replace("$", "");
  var int = parseFloat(current2)
  
  $('#warenkorb-1').text('$' + (int + parseFloat(price)));
  
  var xcurrent = $('#warenkorb-1').text();
  var xcurrent2 = xcurrent.replace("$", "");
  var xint = parseFloat(xcurrent2)
  
  $('#warenkorb-2').text('$' + (xint + (xint * 0.00))); */
  console.log(warenkorb);
}

function buy() {
  $.post("http://police_shop/buy", JSON.stringify({ warenkorb: warenkorb }));
  $(".container").fadeOut(300);
  $.post("http://police_shop/escape", JSON.stringify({}));
  warenkorb = [];
}

function AddItem(name, display, price) {
  $(".list").append(
    `
  <div class="product" id="${name}-${price}">
  <h1>${display}</h1>
  <img src="items/${name}.png">
  <span>${price}$</span>
  <i class="fa-solid fa-basket-shopping" onclick="AddWarenkorb('` +
      name +
      `', '` +
      display +
      `', '` +
      price +
      `')"></i>
  </div>
  `
  );
  itemlist.push({ name: name, display: display, price: price });
}
