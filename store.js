(()=>{
'use strict';
const products=[{"id":"p1v1","name":"Basic","vi":"Dáng cao, Xanh rêu","price":179000,"img":"asset/san_pham/Basic_DangCao_XanhReu.png","tags":"Dáng cao, Xanh rêu Basic","group":"p1"},{"id":"p1v2","name":"Basic","vi":"Dáng thấp, Đen","price":179000,"img":"asset/san_pham/Basic_DangThap_Den.png","tags":"Dáng thấp, Đen Basic","group":"p1"},{"id":"p1v3","name":"Basic","vi":"Dáng thấp, Xanh dương","price":179000,"img":"asset/san_pham/Basic_DangThap_XanhDuong.png","tags":"Dáng thấp, Xanh dương Basic","group":"p1"},{"id":"p1v4","name":"Basic","vi":"Dáng cao, Đỏ mận","price":179000,"img":"asset/san_pham/Basic_DangCao_DoMan.png","tags":"Dáng cao, Đỏ mận Basic","group":"p1"},{"id":"p2v1","name":"Minimalism","vi":"Có quai, Kem be","price":199000,"img":"asset/san_pham/Minimalism_CoQuai_KemBe.png","tags":"Có quai, Kem be Minimalism","group":"p2"},{"id":"p2v2","name":"Minimalism","vi":"Có quai, Xám trắng","price":199000,"img":"asset/san_pham/Minimalism_CoQuai_XamTrang.png","tags":"Có quai, Xám trắng Minimalism","group":"p2"},{"id":"p2v3","name":"Minimalism","vi":"Không quai, Trắng hồng","price":199000,"img":"asset/san_pham/Minimalism_KhongQuai_TrangHong.png","tags":"Không quai, Trắng hồng Minimalism","group":"p2"},{"id":"p2v4","name":"Minimalism","vi":"Có quai, Xám ghi","price":199000,"img":"asset/san_pham/Minimalism_CoQuai_XamGhi.png","tags":"Có quai, Xám ghi Minimalism","group":"p2"},{"id":"p3v1","name":"Gaming Edition","vi":"Quai gaming góc cạnh, Xanh ngọc","price":229000,"img":"asset/san_pham/Gaming_Edition_QuaiGaming_XanhNgoc.png","tags":"Quai gaming góc cạnh, Xanh ngọc Gaming Edition","group":"p3"},{"id":"p3v2","name":"Gaming Edition","vi":"Quai gaming góc cạnh, Xám đen","price":229000,"img":"asset/san_pham/Gaming_Edition_QuaiGaming_XamDen.png","tags":"Quai gaming góc cạnh, Xám đen Gaming Edition","group":"p3"},{"id":"p3v3","name":"Gaming Edition","vi":"Quai gaming góc cạnh, Đỏ","price":229000,"img":"asset/san_pham/Gaming_Edition_QuaiGaming_Do.png","tags":"Quai gaming góc cạnh, Đỏ Gaming Edition","group":"p3"},{"id":"p3v4","name":"Gaming Edition","vi":"Quai gaming góc cạnh, Nâu đỏ","price":229000,"img":"asset/san_pham/Gaming_Edition_QuaiGaming_NauDo.png","tags":"Quai gaming góc cạnh, Nâu đỏ Gaming Edition","group":"p3"},{"id":"p4v1","name":"Art","vi":"Mẫu 1","price":229000,"img":"asset/san_pham/Art_1.png","tags":"Mẫu 1 Art","group":"p4"},{"id":"p4v2","name":"Art","vi":"Mẫu 2","price":229000,"img":"asset/san_pham/Art_2.png","tags":"Mẫu 2 Art","group":"p4"},{"id":"p4v3","name":"Art","vi":"Mẫu 3","price":229000,"img":"asset/san_pham/Art_3.png","tags":"Mẫu 3 Art","group":"p4"},{"id":"p4v4","name":"Art","vi":"Mẫu 4","price":229000,"img":"asset/san_pham/Art_4.png","tags":"Mẫu 4 Art","group":"p4"},{"id":"p5v1","name":"Meme","vi":"Mẫu 1","price":219000,"img":"asset/san_pham/Meme_1.png","tags":"Mẫu 1 Meme","group":"p5"},{"id":"p5v2","name":"Meme","vi":"Mẫu 2","price":219000,"img":"asset/san_pham/Meme_2.png","tags":"Mẫu 2 Meme","group":"p5"},{"id":"p5v3","name":"Meme","vi":"Mẫu 3","price":219000,"img":"asset/san_pham/Meme_3.png","tags":"Mẫu 3 Meme","group":"p5"},{"id":"p5v4","name":"Meme","vi":"Mẫu 4","price":219000,"img":"asset/san_pham/Meme_4.png","tags":"Mẫu 4 Meme","group":"p5"},{"id":"p6v1","name":"Cốc tự thiết kế","vi":"Cốc sứ trắng, Có quai","price":249000,"img":"asset/san_pham/Coc_Tu_Thiet_Ke_Trang_CoQuai.png","tags":"Cốc sứ trắng, Có quai Cốc tự thiết kế","group":"p6"},{"id":"p6v2","name":"Cốc tự thiết kế","vi":"Cốc kim loại Inox, Không quai","price":249000,"img":"asset/san_pham/Coc_Tu_Thiet_Ke_Inox_KhongQuai.png","tags":"Cốc kim loại Inox, Không quai Cốc tự thiết kế","group":"p6"}];
products.push(...[
{id:'sage',name:'Undo Everyday Mug - Sage Green',vi:'Xanh Sage',price:249000,img:'asset/sage.webp'},
{id:'cream',name:'Undo Everyday Mug - Oat Cream',vi:'Kem',price:249000,img:'asset/cream.webp'},
{id:'blush',name:'Undo Everyday Mug - Blush Pink',vi:'Hồng phấn',price:249000,img:'asset/blush.webp'},
{id:'onyx',name:'Undo Everyday Mug - Midnight Black',vi:'Đen',price:249000,img:'asset/onyx.webp'}
].map(p=>({...p,legacy:true})));
const $=id=>document.getElementById(id);
const money=n=>n.toLocaleString('vi-VN')+'đ';
function read(key,fallback){try{return JSON.parse(localStorage.getItem('undo_'+key))??fallback}catch(e){return fallback}}
const savedCart=read('cart',[]);
let cart=(Array.isArray(savedCart)?savedCart:[]).filter(it=>products.some(p=>p.id===it.id)&&Number.isInteger(it.qty)&&it.qty>0&&it.qty<=99);
let filter='all',search='',active='',returnFocus=null;
const pageRegions=document.querySelectorAll('body>.announce,body>header,body>.searchbox,body>main,body>footer');
function save(){try{localStorage.setItem('undo_cart',JSON.stringify(cart))}catch(e){toast('Không thể lưu giỏ hàng. Kiểm tra cài đặt lưu trữ của trình duyệt.')}}
let toastTimeout;
function toast(msg){$('toast').textContent=msg;$('toast').classList.add('show');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>$('toast').classList.remove('show'),2900)}
function open(id){const trigger=active?returnFocus:document.activeElement;closeSearch();closeMobile();close();returnFocus=trigger;active=id;pageRegions.forEach(el=>el.inert=true);$('overlay').classList.add('open');$(id).classList.add('open');$(id).setAttribute('aria-hidden','false');$(id).inert=false;document.body.classList.add('noscroll');$(id).scrollTop=0;requestAnimationFrame(()=>{if(active!==id)return;const el=$(id).querySelector('.modal-close,.close');if(el)el.focus({preventScroll:true})})}
function close(){const wasOpen=Boolean(active);active='';pageRegions.forEach(el=>el.inert=false);$('overlay').classList.remove('open');document.querySelectorAll('.drawer,.modal').forEach(el=>{el.classList.remove('open');el.setAttribute('aria-hidden','true');el.inert=true});document.body.classList.remove('noscroll');if(wasOpen&&returnFocus?.isConnected)returnFocus.focus({preventScroll:true})}
document.addEventListener('keydown',e=>{
 if(e.key!=='Tab'||!active)return;
 const nodes=[...$(active).querySelectorAll('button:not(:disabled),a[href],input:not(:disabled),select,textarea,[tabindex="0"]')].filter(el=>el.getClientRects().length);
 const first=nodes[0],last=nodes[nodes.length-1];
 if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus()}
 else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus()}
});
function dismissDialog(){if(active==='confirmOrderModal')backToCheckout();else close()}
$('overlay')?.addEventListener('click',dismissDialog);document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape'){dismissDialog();closeSearch();closeMobile()}});
function renderProducts(){
 if(!$('productGrid'))return;
 const groups=[...new Set(products.filter(p=>!p.legacy).map(p=>p.group))].map(group=>products.filter(p=>p.group===group));
 const items=groups.filter(g=>!search||g.some(p=>(p.name+' '+p.vi+' '+p.tags).toLocaleLowerCase('vi').includes(search)));
 $('productGrid').innerHTML=items.length?items.map(g=>{const p=g.find(v=>!search||(v.name+' '+v.vi+' '+v.tags).toLocaleLowerCase('vi').includes(search))||g[0];return `<article class="product"><div class="product-art"><a href="san-pham.html?id=${p.id}" data-view="${p.id}"><img src="${p.img}" loading="lazy" alt="${p.name} - ${p.vi}"/></a></div><div class="product-info"><h3 class="product-title"><a class="product-name" href="san-pham.html?id=${p.id}" data-view="${p.id}">${p.name}</a></h3><div class="price">${money(p.price)}</div><p class="product-description">${g.length} phân loại</p><button class="mini-add" data-view="${p.id}">Chọn phân loại</button></div></article>`}).join(''):'<div class="empty-state"><strong>Chưa tìm thấy sản phẩm phù hợp.</strong><p>Hãy thử từ khóa khác.</p><button class="btn small" id="clearFilter">Xem tất cả</button></div>';
 $('resultCount').textContent=`${items.length} sản phẩm`;
 const clear=$('clearFilter');if(clear)clear.addEventListener('click',()=>{search='';$('searchInput').value='';syncSearchUrl();renderProducts();closeSearch();$('collection').tabIndex=-1;$('collection').focus({preventScroll:true});goShopping()});
}
function add(id,qty=1){const found=cart.find(it=>it.id===id);if(found)found.qty=Math.min(99,found.qty+qty);else cart.push({id,qty:Math.min(99,qty)});save();renderCart()}
function renderCart(){
const n=cart.reduce((sum,p)=>sum+p.qty,0);$('cartCount').textContent=n;$('drawerCount').textContent=`(${n})`;const total=cart.reduce((sum,it)=>sum+(products.find(p=>p.id===it.id)?.price||0)*it.qty,0);
$('cartItems').innerHTML=cart.length?cart.map(it=>{const p=products.find(pp=>pp.id===it.id);return `<div class="cart-item"><img src="${p.img}" alt="${p.vi}"/><div><h3>${p.name}</h3><p>Phân loại: ${p.vi}</p><strong>${money(p.price)}</strong><div class="qty" aria-label="Số lượng"><button data-dec="${p.id}" aria-label="Giảm số lượng ${p.vi}">−</button><span>${it.qty}</span><button data-inc="${p.id}" ${it.qty>=99?'disabled':''} aria-label="Tăng số lượng ${p.vi}">+</button></div></div><button class="remove" data-remove="${p.id}" aria-label="Xóa ${p.vi}">×</button></div>`}).join(''):'<div class="cart-empty"><b>Giỏ hàng đang trống</b><p>Chiếc cốc Undo đầu tiên đang chờ bạn đó.</p><button class="btn small" id="shopAgain">Xem sản phẩm</button></div>';
$('cartFooter').innerHTML=cart.length?`<div class="subtotal"><span>Tạm tính</span><span>${money(total)}</span></div><p class="fineprint">${total>=399000?'Đơn hàng đủ điều kiện miễn phí vận chuyển dự kiến.':'Mua thêm '+money(399000-total)+' để đạt mức miễn phí vận chuyển dự kiến.'}</p><a class="btn" id="checkoutBtn" href="thanh-toan.html">Tiến hành thanh toán</a><p class="fineprint">Kiểm tra thông tin trước khi xác nhận</p>`:'';
const again=$('shopAgain');if(again)again.addEventListener('click',()=>{close();goShopping()});
 if($('checkoutContent')){const completed=!$('orderResult').hidden;$('emptyCheckout').hidden=cart.length>0||completed;$('checkoutContent').hidden=!cart.length&&!completed;}
}

function goShopping(){if($('collection'))$('collection').scrollIntoView({behavior:'smooth'});else location.href='index.html#collection'}
function openCart(){open('cartDrawer')}
function orderItems(){return cart.map(it=>{const p=products.find(p=>p.id===it.id);return `<li><span>${p.name} / ${p.vi} × ${it.qty}</span><strong>${money(p.price*it.qty)}</strong></li>`}).join('')}
function orderQuote(){
 const amount=cart.reduce((sum,it)=>sum+products.find(p=>p.id===it.id).price*it.qty,0);
 const region=$('shippingRegion').value;
 const low=amount>=399000?0:region==='hanoi'?15000:25000;
 const high=amount>=399000?0:region==='hanoi'?15000:40000;
 const range=(a,b)=>a===b?money(a):money(a)+' đến '+money(b);
 return {amount,region,shipping:region?low===0?'Miễn phí':range(low,high):'Chọn khu vực',total:region?range(amount+low,amount+high):'Chọn khu vực'};
}
function renderCheckout(){
 if(!$('checkoutForm'))return;
 const quote=orderQuote();
 $('checkoutItems').innerHTML=orderItems();
 $('checkoutAmount').textContent=money(quote.amount);
 $('checkoutShipping').textContent=quote.shipping;
 $('checkoutTotal').textContent=quote.total;
 $('shippingNote').textContent=!quote.region?'Chọn khu vực để xem chi phí dự kiến.':quote.amount>=399000?'Đơn từ 399.000đ tiền sản phẩm được miễn phí giao hàng dự kiến.':quote.region==='hanoi'?'Phí giao nội thành Hà Nội dự kiến là 15.000đ.':'Phí giao dự kiến từ 25.000đ đến 40.000đ tùy địa chỉ và khối lượng. Tổng tiền là một khoảng ước tính, chưa chốt phí cụ thể.';
}
$('shippingRegion')?.addEventListener('change',renderCheckout);
function viewProduct(id){if(!$('productModalContent')){location.href='san-pham.html?id='+encodeURIComponent(id);return;}let p=products.find(x=>x.id===id&&!x.legacy);if(!p){$('productModalContent').innerHTML='<h1>Không tìm thấy sản phẩm</h1><a href="index.html#collection">Về bộ sưu tập</a>';return;}document.title=p.name+' | UnDo';
$('productModalContent').innerHTML=`<div class="modal-product"><img id="modalImg" src="${p.img}" alt="${p.name} - ${p.vi}"/><div class="modal-details"><h1>${p.name}</h1><div class="price">${money(p.price)}</div><strong>Phân loại: <span id="selectedColor">${p.vi}</span></strong><select id="productColor" aria-label="Chọn phân loại">${products.filter(v=>v.group===p.group).map(v=>`<option value="${v.id}" ${v.id===id?'selected':''}>${v.vi}</option>`).join('')}</select><strong>Số lượng</strong><div class="qty"><button id="modalDec" disabled aria-label="Giảm số lượng">−</button><span id="modalQty">1</span><button id="modalInc" aria-label="Tăng số lượng">+</button></div><button class="btn" id="modalAdd">Thêm vào giỏ hàng</button><p class="checkout-links"><a href="giao-hang-doi-tra.html">Giao hàng và đổi trả</a> <a href="bao-hanh.html">Bảo hành</a></p></div></div>`;
let selected=id,q=1;
$('modalDec')?.addEventListener('click',()=>{$('modalQty').textContent=q=Math.max(1,q-1);$('modalDec').disabled=q===1;$('modalInc').disabled=q===99});$('modalInc')?.addEventListener('click',()=>{$('modalQty').textContent=q=Math.min(99,q+1);$('modalDec').disabled=q===1;$('modalInc').disabled=q===99});
$('productColor')?.addEventListener('change',e=>{selected=e.target.value;const pick=products.find(x=>x.id===selected);$('modalImg').src=pick.img;$('modalImg').alt=pick.name+' - '+pick.vi;$('selectedColor').textContent=pick.vi;history.replaceState(null,'','san-pham.html?id='+encodeURIComponent(selected))});
$('modalAdd')?.addEventListener('click',()=>{add(selected,q);const item=products.find(p=>p.id===selected);$('addedSummary').textContent=`${item.name} / ${item.vi} × ${q}`;open('addedModal')});}
document.addEventListener('click',e=>{let b=e.target.closest('[data-view],[data-add],[data-inc],[data-dec],[data-remove]');if(!b)return;if(b.matches('a[href]'))return;e.preventDefault();if(b.dataset.view)viewProduct(b.dataset.view);if(b.dataset.add)add(b.dataset.add);
if(b.dataset.inc||b.dataset.dec||b.dataset.remove){let id=b.dataset.inc||b.dataset.dec||b.dataset.remove;let it=cart.find(x=>x.id===id);if(!it)return;if(b.dataset.remove)cart=cart.filter(x=>x.id!==id);else{it.qty+=b.dataset.inc?1:-1;if(it.qty<=0)cart=cart.filter(x=>x.id!==id);else it.qty=Math.min(99,it.qty)}const action=b.dataset.inc?'inc':b.dataset.dec?'dec':'remove';save();renderCart();renderCheckout();const replacement=document.querySelector(`[data-${action}="${id}"]:not(:disabled)`)||$('cartItems').querySelector('button')||$('cartDrawer').querySelector('[data-close]');replacement?.focus({preventScroll:true})}});
document.querySelectorAll('.chip').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;document.querySelectorAll('.chip').forEach(c=>c.classList.toggle('active',c===b));renderProducts()}));
$('addedCart')?.addEventListener('click',()=>openCart());
$('addedContinue')?.addEventListener('click',close);
$('cartToggle')?.addEventListener('click',()=>{renderCart();openCart()});
function positionSearch(){if($('searchBox')?.classList.contains('open'))$('searchBox').style.top=document.querySelector('.header').getBoundingClientRect().bottom+'px'}
window.addEventListener('scroll',positionSearch,{passive:true});window.addEventListener('resize',positionSearch);
function closeSearch(){if(!$('searchBox'))return;$('searchBox').classList.remove('open');$('searchToggle').setAttribute('aria-expanded','false')}
$('searchToggle')?.addEventListener('click',()=>{closeMobile();let isOpen=$('searchBox').classList.toggle('open');$('searchToggle').setAttribute('aria-expanded',String(isOpen));if(isOpen){positionSearch();$('searchInput').focus()}else closeSearch()});$('closeSearch')?.addEventListener('click',closeSearch);
$('searchInput')?.addEventListener('input',e=>{search=e.target.value.toLocaleLowerCase('vi').trim();filter='all';if($('productGrid'))syncSearchUrl();document.querySelectorAll('.chip').forEach(b=>b.classList.toggle('active',b.dataset.filter==='all'));renderProducts()});
function syncSearchUrl(){const url=new URL(location.href);if(search)url.searchParams.set('q',search);else url.searchParams.delete('q');history.replaceState(null,'',url)}
$('searchForm')?.addEventListener('submit',e=>{e.preventDefault();if(!$('productGrid')){location.href='index.html?q='+encodeURIComponent($('searchInput').value.trim());return;}renderProducts();closeSearch();$('collection').tabIndex=-1;$('collection').focus({preventScroll:true});goShopping()});
function closeMobile(){if(!$('mobileMenu'))return;$('mobileMenu').classList.remove('open');$('menuToggle').setAttribute('aria-expanded','false')}
$('menuToggle')?.addEventListener('click',()=>{closeSearch();let on=$('mobileMenu').classList.toggle('open');$('menuToggle').setAttribute('aria-expanded',String(on))});$('mobileMenu')?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMobile));
$('newsletterForm')?.addEventListener('submit',e=>{e.preventDefault();toast('Cảm ơn bạn!');e.target.reset()});
$('checkoutForm')?.addEventListener('input',e=>{if(e.target.setCustomValidity)e.target.setCustomValidity('')});
let orderApproved=false;
function backToCheckout(){close();$('checkoutForm').querySelector('button[type=submit]').focus({preventScroll:true})}
$('confirmOrderBack')?.addEventListener('click',backToCheckout);
$('confirmOrderClose')?.addEventListener('click',backToCheckout);
$('confirmOrderYes')?.addEventListener('click',()=>{orderApproved=true;close();$('checkoutForm').requestSubmit();orderApproved=false});
$('checkoutForm')?.addEventListener('submit',e=>{
 e.preventDefault();if(!cart.length||!e.target.reportValidity())return;
 const data=new FormData(e.target);
 const name=String(data.get('name')||'').trim();
 if(!name){e.target.elements.name.setCustomValidity('Vui lòng nhập họ và tên.');e.target.elements.name.reportValidity();return;}
 const phone=String(data.get('phone')||'').trim(),address=String(data.get('address')||'').trim();
 if(!phone||address.length<5){const field=!phone?e.target.elements.phone:e.target.elements.address;field.setCustomValidity('Vui lòng nhập thông tin hợp lệ.');field.reportValidity();return;}
 const quote=orderQuote();if(!['hanoi','other'].includes(quote.region))return;
 if(!orderApproved){$('confirmOrderTotal').textContent='Tổng dự kiến: '+quote.total;open('confirmOrderModal');return;}
 const region=quote.region==='hanoi'?'Nội thành Hà Nội':'Các khu vực còn lại';
 $('orderResult').hidden=false;$('orderResult').className='modal-alert';
 $('orderResult').innerHTML=`<p>Người nhận: <b>${escapeHtml(name)}</b><br/>Điện thoại: ${escapeHtml(phone)}<br/>Địa chỉ: ${escapeHtml(address)}<br/>Khu vực giao hàng: ${region}.</p>${data.get('email')?`<p>Email: ${escapeHtml(String(data.get('email')))}</p>`:''}${data.get('note')?`<p>Ghi chú: ${escapeHtml(String(data.get('note')))}</p>`:''}<ul class="order-items">${orderItems()}</ul><dl class="order-totals"><div><dt>Tiền sản phẩm</dt><dd>${money(quote.amount)}</dd></div><div><dt>Phí giao dự kiến</dt><dd>${quote.shipping}</dd></div><div class="order-total"><dt>Tổng dự kiến</dt><dd>${quote.total}</dd></div></dl><button type="button" class="btn small" id="continueShop">Tiếp tục mua sắm</button>`;
 const status=$('checkoutContent').querySelector('h1');status.id='orderStatus';status.tabIndex=-1;status.textContent='Đã xác nhận đặt hàng';document.querySelector('.checkout-page>.support-back').hidden=true;document.title='Đã xác nhận đặt hàng | UnDo';$('checkoutHelp').hidden=true;
 $('checkoutForm').hidden=true;cart=[];save();renderCart();e.target.reset();$('orderStatus').focus({preventScroll:true});$('orderStatus').scrollIntoView({block:'start',behavior:'instant'});
 $('continueShop')?.addEventListener('click',()=>{close();goShopping()});
});
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
const sessionKey='undo_sample_session';
let signedIn=false,profile=null;
const profileKey='undo_session_profile';
try{const value=JSON.parse(sessionStorage.getItem(profileKey));if(value&&typeof value.name==='string'&&typeof value.email==='string'&&value.name.length<=100&&value.email.length<=254)profile=value}catch{}
function renderAccount(){
 if($('accountToggle')){$('accountToggle').setAttribute('aria-label',signedIn?'Tài khoản '+(profile?profile.name:'UnDo'):'Đăng nhập');$('accountToggle').classList.toggle('is-signed-in',signedIn)}
 if(!$('accountGuest'))return;
 $('accountTitle').textContent=signedIn?'Tài khoản':'Đăng nhập';
 const registering=location.pathname.endsWith('/dang-ky.html')&&!signedIn;
 $('registerForm').hidden=!registering;
 if(registering)$('accountTitle').textContent='Tạo tài khoản';
 $('accountDisplayName').textContent=profile?profile.name:'';$('accountDisplayName').hidden=!profile;
 $('accountDisplayEmail').textContent=profile?profile.email:'';$('accountDisplayEmail').hidden=!profile;
 $('accountGuest').hidden=signedIn||registering;$('accountSignedIn').hidden=!signedIn;
 $('accountToggle').setAttribute('aria-label',signedIn?'Tài khoản '+(profile?profile.name:'UnDo'):'Đăng nhập');
 $('accountToggle').classList.toggle('is-signed-in',signedIn);document.title=$('accountTitle').textContent+' | UnDo';
}
try{signedIn=sessionStorage.getItem(sessionKey)==='guest'&&!!sessionStorage.getItem('undo_session_credentials')&&!!profile}catch{}
renderAccount();

const credentialsKey='undo_session_credentials';
async function passwordVerifier(password,salt){
 const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveBits']);
 const bits=await crypto.subtle.deriveBits({name:'PBKDF2',salt:new Uint8Array(salt),iterations:600000,hash:'SHA-256'},key,256);
 return Array.from(new Uint8Array(bits),n=>n.toString(16).padStart(2,'0')).join('');
}
function accountError(message){$('accountError').textContent=message;$('accountError').hidden=false;}
function resetPasswords(form){form.querySelectorAll('[data-password-toggle]').forEach(button=>{const input=$(button.dataset.passwordToggle);input.type='password';button.textContent='Hiện';button.setAttribute('aria-pressed','false');button.setAttribute('aria-label','Hiện '+(input.id==='confirmPassword'?'nhập lại mật khẩu':'mật khẩu'))})}
document.querySelectorAll('[data-password-toggle]').forEach(button=>button.addEventListener('click',()=>{const input=$(button.dataset.passwordToggle),show=input.type==='password';input.type=show?'text':'password';button.textContent=show?'Ẩn':'Hiện';button.setAttribute('aria-pressed',String(show));button.setAttribute('aria-label',(show?'Ẩn ':'Hiện ')+(input.id==='confirmPassword'?'nhập lại mật khẩu':'mật khẩu'))}));
$('loginForm')?.addEventListener('submit',async e=>{
 e.preventDefault();const form=e.target;if(!form.reportValidity())return;
 const button=form.querySelector('[type=submit]');if(button.disabled)return;button.disabled=true;button.textContent='Đang đăng nhập…';$('accountError').hidden=true;
 try{
  const credentials=JSON.parse(sessionStorage.getItem(credentialsKey));
  const email=form.elements.email.value.trim().toLowerCase();
  if(!credentials||!profile||credentials.email!==email||await passwordVerifier(form.elements.password.value,credentials.salt)!==credentials.verifier){accountError('Email hoặc mật khẩu không đúng.');return}
  sessionStorage.setItem(sessionKey,'guest');signedIn=true;form.reset();resetPasswords(form);renderAccount();$('accountContinue').focus({preventScroll:true});toast('Đã đăng nhập');
 }catch{accountError('Không thể đăng nhập lúc này. Vui lòng kiểm tra cài đặt trình duyệt.');}
 finally{button.disabled=false;button.textContent='Đăng nhập';}
});
$('sampleLogout')?.addEventListener('click',()=>{
 try{sessionStorage.removeItem(sessionKey)}catch{accountError('Không thể đăng xuất. Vui lòng kiểm tra cài đặt trình duyệt.');return}
 signedIn=false;$('accountError').hidden=true;renderAccount();($('registerForm').hidden?$('loginForm').elements.email:$('registerForm').elements.displayName).focus({preventScroll:true});toast('Đã đăng xuất');
});
$('registerForm')?.addEventListener('submit',async e=>{
 e.preventDefault();const form=e.target;if(!form.reportValidity())return;
 const name=form.elements.displayName.value.trim(),email=form.elements.email.value.trim().toLowerCase(),phone=form.elements.phone.value.replace(/\s/g,''),password=form.elements.password.value;
 if(!name){form.elements.displayName.setCustomValidity('Vui lòng nhập họ và tên.');form.elements.displayName.reportValidity();return}
 if(!/^(0\d{9}|\+84\d{9})$/.test(phone)){form.elements.phone.setCustomValidity('Nhập số điện thoại hợp lệ, ví dụ 0901234567.');form.elements.phone.reportValidity();return}
 if(!/[a-z]/.test(password)||!/[A-Z]/.test(password)||!/[0-9]/.test(password)){form.elements.password.setCustomValidity('Mật khẩu cần có chữ hoa, chữ thường và số.');form.elements.password.reportValidity();return}
 if(password!==form.elements.confirmPassword.value){form.elements.confirmPassword.setCustomValidity('Mật khẩu nhập lại chưa khớp.');form.elements.confirmPassword.reportValidity();return}
 const button=form.querySelector('[type=submit]');if(button.disabled)return;button.disabled=true;button.textContent='Đang tạo tài khoản…';$('accountError').hidden=true;
 try{
  const existing=JSON.parse(sessionStorage.getItem(credentialsKey));if(existing?.email===email){accountError('Email này đã có tài khoản. Vui lòng đăng nhập.');return}
  const salt=Array.from(crypto.getRandomValues(new Uint8Array(16))),verifier=await passwordVerifier(password,salt),next={name,email,phone};
  sessionStorage.setItem(credentialsKey,JSON.stringify({email,salt,verifier}));sessionStorage.setItem(profileKey,JSON.stringify(next));sessionStorage.setItem(sessionKey,'guest');
  profile=next;signedIn=true;form.reset();resetPasswords(form);renderAccount();$('accountContinue').focus({preventScroll:true});toast('Đã tạo tài khoản');
 }catch{accountError('Không thể tạo tài khoản lúc này. Vui lòng kiểm tra cài đặt trình duyệt.');}
 finally{button.disabled=false;button.textContent='Tạo tài khoản';}
});
for(const form of [$('registerForm'),$('loginForm')])form?.addEventListener('input',e=>{if(e.target.setCustomValidity)e.target.setCustomValidity('');if(form.id==='registerForm'&&e.target.name==='password')form.elements.confirmPassword.setCustomValidity('');$('accountError').hidden=true;});
$('accountContinue')?.addEventListener('click',()=>{location.href='index.html#collection'});
window.addEventListener('pageshow',event=>{if(!event.persisted)return;const saved=read('cart',[]);cart=Array.isArray(saved)?saved.filter(it=>products.some(p=>p.id===it.id)&&Number.isInteger(it.qty)&&it.qty>0&&it.qty<=99):[];try{signedIn=sessionStorage.getItem(sessionKey)==='guest'&&!!sessionStorage.getItem('undo_session_credentials');const value=JSON.parse(sessionStorage.getItem(profileKey));profile=value&&typeof value.name==='string'&&typeof value.email==='string'&&value.name.length<=100&&value.email.length<=254?value:null}catch{}renderAccount();renderCart();renderCheckout()});
window.addEventListener('storage',e=>{if(e.key!=='undo_cart'&&e.key!==null)return;const saved=read('cart',[]);cart=Array.isArray(saved)?saved.filter(it=>products.some(p=>p.id===it.id)&&Number.isInteger(it.qty)&&it.qty>0&&it.qty<=99):[];if(active==='confirmOrderModal')backToCheckout();renderCart();renderCheckout()});
renderProducts();renderCart();renderCheckout();
if($('productModalContent'))viewProduct(new URLSearchParams(location.search).get('id')||'p1v1');
if(location.pathname.endsWith('/dang-ky.html')&&!signedIn){$('accountGuest').hidden=true;$('registerForm').hidden=false;$('accountTitle').textContent='Tạo tài khoản'}
if($('productGrid')){const q=new URLSearchParams(location.search).get('q');if(q){search=q;$('searchInput').value=q;renderProducts()}}
})();
