const storeIcons={"plus": "<!--\ntags: [add, new, create, insert, more, plus-sign, increase, positive, math, cross, plus]\ncategory: Math\nversion: \"1.0\"\nunicode: \"eb0b\"\n-->\n<svg class=\"ui-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n  <path d=\"M12 5l0 14\" />\n  <path d=\"M5 12l14 0\" />\n</svg>", "minus": "<!--\ntags: [subtract, remove, less, negative, dash, hyphen, minimize, collapse, delete, minus]\ncategory: Math\nversion: \"1.0\"\nunicode: \"eaf2\"\n-->\n<svg class=\"ui-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n  <path d=\"M5 12l14 0\" />\n</svg>", "eye": "<!--\ntags: [eye, view, visibility, show, see, preview, visible, watch, vision, password-show]\ncategory: System\nversion: \"1.0\"\nunicode: \"ea9a\"\n-->\n<svg class=\"ui-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n  <path d=\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0\" />\n  <path d=\"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6\" />\n</svg>", "eye-off": "<!--\ntags: [hide, hidden, invisible, visibility-off, eye-slash, unseen, password-hide, private, not-visible, eye, off]\ncategory: System\nversion: \"1.22\"\nunicode: \"ecf0\"\n-->\n<svg class=\"ui-icon\" aria-hidden=\"true\" focusable=\"false\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.75\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n  <path d=\"M10.585 10.587a2 2 0 0 0 2.829 2.828\" />\n  <path d=\"M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87\" />\n  <path d=\"M3 3l18 18\" />\n</svg>"};
(()=>{
'use strict';
const products=[{"id": "p1v1", "name": "Basic", "vi": "Size M (400ml), Dáng cao, Xanh rêu", "price": 179000, "img": "asset/san_pham/Basic_DangCao_XanhReu.png", "tags": "Size M 400ml Dáng cao, Xanh rêu Basic", "group": "p1"}, {"id": "p1v2", "name": "Basic", "vi": "Size M (400ml), Dáng thấp, Đen", "price": 179000, "img": "asset/san_pham/Basic_DangThap_Den.png", "tags": "Size M 400ml Dáng thấp, Đen Basic", "group": "p1"}, {"id": "p1v3", "name": "Basic", "vi": "Size M (400ml), Dáng thấp, Xanh dương", "price": 179000, "img": "asset/san_pham/Basic_DangThap_XanhDuong.png", "tags": "Size M 400ml Dáng thấp, Xanh dương Basic", "group": "p1"}, {"id": "p1v4", "name": "Basic", "vi": "Size M (400ml), Dáng cao, Đỏ mận", "price": 179000, "img": "asset/san_pham/Basic_DangCao_DoMan.png", "tags": "Size M 400ml Dáng cao, Đỏ mận Basic", "group": "p1"}, {"id": "p2v1", "name": "Minimalism", "vi": "Size M (400ml), Có quai, Kem be", "price": 199000, "img": "asset/san_pham/Minimalism_CoQuai_KemBe.png", "tags": "Size M 400ml Có quai, Kem be Minimalism", "group": "p2"}, {"id": "p2v2", "name": "Minimalism", "vi": "Size M (400ml), Có quai, Xám trắng", "price": 199000, "img": "asset/san_pham/Minimalism_CoQuai_XamTrang.png", "tags": "Size M 400ml Có quai, Xám trắng Minimalism", "group": "p2"}, {"id": "p2v3", "name": "Minimalism", "vi": "Size M (400ml), Không quai, Trắng hồng", "price": 199000, "img": "asset/san_pham/Minimalism_KhongQuai_TrangHong.png", "tags": "Size M 400ml Không quai, Trắng hồng Minimalism", "group": "p2"}, {"id": "p2v4", "name": "Minimalism", "vi": "Size M (400ml), Có quai, Xám ghi", "price": 199000, "img": "asset/san_pham/Minimalism_CoQuai_XamGhi.png", "tags": "Size M 400ml Có quai, Xám ghi Minimalism", "group": "p2"}, {"id": "p3v1", "name": "Gaming Edition", "vi": "Size M (400ml), Quai gaming góc cạnh, Xanh ngọc", "price": 229000, "img": "asset/san_pham/Gaming_Edition_QuaiGaming_XanhNgoc.png", "tags": "Size M 400ml Quai gaming góc cạnh, Xanh ngọc Gaming Edition", "group": "p3"}, {"id": "p3v2", "name": "Gaming Edition", "vi": "Size M (400ml), Quai gaming góc cạnh, Xám đen", "price": 229000, "img": "asset/san_pham/Gaming_Edition_QuaiGaming_XamDen.png", "tags": "Size M 400ml Quai gaming góc cạnh, Xám đen Gaming Edition", "group": "p3"}, {"id": "p3v3", "name": "Gaming Edition", "vi": "Size M (400ml), Quai gaming góc cạnh, Đỏ", "price": 229000, "img": "asset/san_pham/Gaming_Edition_QuaiGaming_Do.png", "tags": "Size M 400ml Quai gaming góc cạnh, Đỏ Gaming Edition", "group": "p3"}, {"id": "p3v4", "name": "Gaming Edition", "vi": "Size M (400ml), Quai gaming góc cạnh, Nâu đỏ", "price": 229000, "img": "asset/san_pham/Gaming_Edition_QuaiGaming_NauDo.png", "tags": "Size M 400ml Quai gaming góc cạnh, Nâu đỏ Gaming Edition", "group": "p3"}, {"id": "p4v1", "name": "Art", "vi": "Size M (400ml), Mẫu 1", "price": 229000, "img": "asset/san_pham/Art_1.png", "tags": "Size M 400ml Mẫu 1 Art", "group": "p4"}, {"id": "p4v2", "name": "Art", "vi": "Size M (400ml), Mẫu 2", "price": 229000, "img": "asset/san_pham/Art_2.png", "tags": "Size M 400ml Mẫu 2 Art", "group": "p4"}, {"id": "p4v3", "name": "Art", "vi": "Size M (400ml), Mẫu 3", "price": 229000, "img": "asset/san_pham/Art_3.png", "tags": "Size M 400ml Mẫu 3 Art", "group": "p4"}, {"id": "p4v4", "name": "Art", "vi": "Size M (400ml), Mẫu 4", "price": 229000, "img": "asset/san_pham/Art_4.png", "tags": "Size M 400ml Mẫu 4 Art", "group": "p4"}, {"id": "p5v1", "name": "Meme", "vi": "Size M (400ml), Mẫu 1", "price": 219000, "img": "asset/san_pham/Meme_1.png", "tags": "Size M 400ml Mẫu 1 Meme", "group": "p5"}, {"id": "p5v2", "name": "Meme", "vi": "Size M (400ml), Mẫu 2", "price": 219000, "img": "asset/san_pham/Meme_2.png", "tags": "Size M 400ml Mẫu 2 Meme", "group": "p5"}, {"id": "p5v3", "name": "Meme", "vi": "Size M (400ml), Mẫu 3", "price": 219000, "img": "asset/san_pham/Meme_3.png", "tags": "Size M 400ml Mẫu 3 Meme", "group": "p5"}, {"id": "p5v4", "name": "Meme", "vi": "Size M (400ml), Mẫu 4", "price": 219000, "img": "asset/san_pham/Meme_4.png", "tags": "Size M 400ml Mẫu 4 Meme", "group": "p5"}, {"id": "p6v1", "name": "Cốc tự thiết kế", "vi": "Size M (400ml), Cốc sứ trắng, Có quai", "price": 249000, "img": "asset/san_pham/Coc_Tu_Thiet_Ke_Trang_CoQuai.png", "tags": "Size M 400ml Cốc sứ trắng, Có quai Cốc tự thiết kế", "group": "p6"}, {"id": "p6v2", "name": "Cốc tự thiết kế", "vi": "Size M (400ml), Cốc kim loại Inox, Không quai", "price": 249000, "img": "asset/san_pham/Coc_Tu_Thiet_Ke_Inox_KhongQuai.png", "tags": "Size M 400ml Cốc kim loại Inox, Không quai Cốc tự thiết kế", "group": "p6"}];
products.push(...[
{id:'sage',name:'Undo Everyday Mug - Sage Green',vi:'Size M (400ml), Xanh Sage',price:249000,img:'asset/sage.webp'},
{id:'cream',name:'Undo Everyday Mug - Oat Cream',vi:'Size M (400ml), Kem',price:249000,img:'asset/cream.webp'},
{id:'blush',name:'Undo Everyday Mug - Blush Pink',vi:'Size M (400ml), Hồng phấn',price:249000,img:'asset/blush.webp'},
{id:'onyx',name:'Undo Everyday Mug - Midnight Black',vi:'Size M (400ml), Đen',price:249000,img:'asset/onyx.webp'}
].map(p=>({...p,legacy:true})));
const productDescriptions={
p1:"Basic là dòng cốc chống đổ tiêu chuẩn của UnDo dành cho bàn học và góc làm việc hằng ngày. Khác với các dòng phối hai tông màu hay in họa tiết, phiên bản này giữ bề mặt sơn trơn đồng nhất cùng đường gân chéo nhẹ và quai cầm liền khối gọn gàng. Dòng sản phẩm có dung tích Size M 400 ml với bốn phân loại chia theo hai phom cốc: dáng cao thanh thoát màu xanh rêu, đỏ mận và dáng thấp đầm tay màu đen, xanh dương. Phần lõi làm bằng thép không gỉ inox 304 an toàn cho đồ uống, kết hợp cấu trúc cách nhiệt chân không hai lớp giữ nóng từ 4 đến 6 giờ và giữ lạnh tới 12 giờ mà vỏ ngoài không đọng hơi nước. Đáy cốc tích hợp đế hút chân không bám vững trên mặt bàn phẳng, nhẵn khi gặp lực đẩy ngang, hạn chế đổ nước vào máy tính hay tài liệu; khi uống chỉ cần nhấc thẳng đứng vuông góc với mặt bàn. Nắp đậy có gioăng silicon tháo rời giúp hạn chế sánh nước và dễ vệ sinh bằng bọt biển mềm sau mỗi ngày.",
p2:"Minimalism phù hợp với người chuộng bảng màu trung tính và góc bàn làm việc ít chi tiết rườm rà. Điểm nhận diện riêng của dòng này là thân cốc phối hai mảng màu ngăn cách bằng đường viền chéo mảnh, đi kèm bề mặt điểm hạt mờ dịu mắt thay cho lớp sơn đơn sắc ở dòng Basic. Sản phẩm có dung tích tiêu chuẩn Size M 400 ml cùng bốn lựa chọn: ba phiên bản có quai màu kem be, xám trắng, xám ghi và một phiên bản không quai màu trắng hồng ôm gọn lòng bàn tay. Bên trong là lòng inox 304 kết hợp hai lớp cách nhiệt chân không, giữ ấm cà phê hoặc trà từ 4 đến 6 giờ và giữ đồ uống lạnh tới 12 giờ mà thành ngoài luôn khô ráo, êm tay. Bộ đế giác hút dưới đáy tự bám chặt xuống mặt bàn gỗ phẳng, kính hoặc đá nhẵn khi vô tình quệt tay ngang, bảo vệ bàn phím và sổ ghi chép. Khi nhấc thẳng theo phương vuông góc từ dưới lên, cốc tự nhả lực hút nhẹ nhàng. Nắp cốc đậy kín kèm gioăng silicon tháo rửa nhanh.",
p3:"Gaming Edition được thiết kế riêng cho góc máy tính, nơi các pha vẩy chuột nhanh hay thao tác bàn phím liên tục dễ làm va đổ cốc nước. Khác hẳn phom bo tròn quen thuộc, dòng này nổi bật nhờ vỏ ngoài dập nổi các đường gân cơ khí, mảng họa tiết đan chéo khỏe khoắn và phần quai gaming góc cạnh có rãnh tì ngón tay chắc chắn. Cốc đạt dung tích Size M 400 ml với bốn tông màu đậm nét gồm xanh ngọc, xám đen, đỏ và nâu đỏ. Đế hút cao su dưới đáy bám chặt trên mặt bàn phẳng, sạch và nhẵn khi chịu lực xô ngang, giữ an toàn cho bàn phím cơ, chuột và tai nghe đặt cạnh bên; khi uống chỉ cần nhấc thẳng đứng vuông góc là cốc rời mặt bàn êm ái. Ruột cốc làm bằng thép không gỉ inox 304 cách nhiệt hai lớp, giữ lạnh nước đá tới 12 giờ hoặc giữ ấm đồ uống nóng từ 4 đến 6 giờ mà không đọng giọt nước ra bàn di chuột. Khi rót nước, nên chừa khoảng 1,5 đến 2 cm dưới miệng cốc và rửa bằng tay.",
p4:"Art đưa các họa tiết hội họa kinh điển lên thân cốc chống đổ dung tích Size M 400 ml, tạo điểm nhấn thị giác cho bàn làm việc, bàn đọc sách hoặc xưởng vẽ cá nhân. Thay vì bề mặt trơn màu, dòng Art có bốn mẫu in bao quanh thân cốc phối cùng quai cầm và đế tiệp tông: Mẫu 1 lấy cảm hứng bầu trời đêm xoáy xanh vàng, Mẫu 2 tái hiện ngọn sóng biển xanh lam, Mẫu 3 mang bố cục hình học trừu tượng trên nền kem và Mẫu 4 gợi nét vòm kiến trúc cổ điển trầm ấm. Bên dưới lớp vỏ in sắc nét vẫn là lòng thép không gỉ inox 304 cách nhiệt chân không hai lớp, giữ nóng đồ uống từ 4 đến 6 giờ, giữ lạnh đến 12 giờ và ngăn hơi nước ngưng tụ làm ướt mặt bàn. Cơ chế đế hút chân không giữ cốc đứng vững trên bề mặt phẳng nhẵn trước các cú chạm ngang bất ngờ vào sổ phác thảo hay bản vẽ, đồng thời nhả nhẹ khi nhấc thẳng đứng lên trên. Nên rửa cốc bằng giẻ mềm để giữ bền màu in.",
p5:"Meme là dòng cốc chống đổ mang tinh thần hài hước cho bàn học, văn phòng hoặc làm quà tặng bạn bè đồng nghiệp. Khác với vẻ trang nhã của Art hay Minimalism, bốn mẫu trong dòng Meme in trọn các biểu cảm vui nhộn lên thân trụ thẳng có quai đen và nắp kín: từ chú mèo tỉnh bơ trước đám lửa (Mẫu 1), mèo con há miệng tinh nghịch (Mẫu 2), mèo đen cười hóm hỉnh (Mẫu 3) đến nhân vật xanh lá ra hiệu giữ yên lặng (Mẫu 4). Mỗi mẫu còn phối màu đế hút riêng ăn nhập với hình in. Cốc sở hữu dung tích tiêu chuẩn Size M 400 ml cùng lòng inox 304 hai lớp cách nhiệt chân không, giữ nóng trà hay cà phê từ 4 đến 6 giờ và giữ nước đá mát lạnh tới 12 giờ mà thân ngoài không đọng nước. Đế hút chân không bám chặt xuống mặt bàn phẳng nhẵn khi bạn lỡ vung tay lúc trò chuyện hay gõ phím, rồi tự nhả êm khi nhấc thẳng đứng vuông góc. Lưu ý không đưa cốc vào lò vi sóng và nên rửa bằng bọt biển mềm.",
p6:"Cốc tự thiết kế là dòng sản phẩm dành cho nhu cầu cá nhân hóa hình in, tên riêng, biểu trưng câu lạc bộ hoặc quà tặng đồng bộ cho tập thể. Khác với năm dòng in sẵn màu sắc và họa tiết cố định, dòng này sử dụng nền vỏ trắng trơn sạch để làm nổi bật chi tiết đặt riêng mà không bị rối bố cục. Bạn có thể chọn một trong hai phân loại dung tích Size M 400 ml tùy thói quen sử dụng: bản cốc sứ trắng có quai cầm thanh lịch hoặc bản cốc kim loại inox gọn gàng không quai. Cả hai đều trang bị lòng thép không gỉ inox 304 kết hợp cấu trúc giữ nhiệt chân không hai lớp, duy trì độ nóng từ 4 đến 6 giờ và giữ lạnh tới 12 giờ mà mặt ngoài vẫn khô ráo, không nóng tay. Đế hút chân không dưới đáy giữ cốc bám chắc trên mặt bàn phẳng, nhẵn khi có va chạm ngang và tự giải phóng lực hút khi nhấc thẳng đứng lên trên. Để hình in và gioăng nắp bền lâu, nên rửa tay nhẹ nhàng bằng mút mềm."
};
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
function open(id){const trigger=active?returnFocus:document.activeElement;$('floatingContactPanel')?.hidePopover();closeSearch();closeMobile();close();returnFocus=trigger;active=id;pageRegions.forEach(el=>el.inert=true);$('overlay').classList.add('open');$(id).classList.add('open');$(id).setAttribute('aria-hidden','false');$(id).inert=false;document.body.classList.add('noscroll');$(id).scrollTop=0;requestAnimationFrame(()=>{if(active!==id)return;const el=$(id).querySelector('.modal-close,.close');if(el)el.focus({preventScroll:true})})}
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
$('cartItems').innerHTML=cart.length?cart.map(it=>{const p=products.find(pp=>pp.id===it.id);return `<div class="cart-item"><img src="${p.img}" alt="${p.vi}"/><div><h3>${p.name}</h3><p>Phân loại: ${p.vi}</p><strong>${money(p.price)}</strong><div class="qty" aria-label="Số lượng"><button data-dec="${p.id}" aria-label="Giảm số lượng ${p.vi}">${storeIcons.minus}</button><span>${it.qty}</span><button data-inc="${p.id}" ${it.qty>=99?'disabled':''} aria-label="Tăng số lượng ${p.vi}">${storeIcons.plus}</button></div></div><button class="remove" data-remove="${p.id}" aria-label="Xóa ${p.vi}">Xóa</button></div>`}).join(''):'<div class="cart-empty"><b>Giỏ hàng đang trống</b><p>Chiếc cốc Undo đầu tiên đang chờ bạn đó.</p><button class="btn small" id="shopAgain">Xem sản phẩm</button></div>';
$('cartFooter').innerHTML=cart.length?`<div class="subtotal"><span>Tạm tính</span><span>${money(total)}</span></div><p class="fineprint">${total>=399000?'Đơn hàng đủ điều kiện miễn phí vận chuyển dự kiến.':'Mua thêm '+money(399000-total)+' để đạt mức miễn phí vận chuyển dự kiến.'}</p><a class="btn" id="checkoutBtn" href="thanh-toan.html">Tiến hành thanh toán</a><p class="fineprint">Kiểm tra thông tin trước khi xác nhận</p>`:'';
const again=$('shopAgain');if(again)again.addEventListener('click',()=>{close();goShopping()});
 if($('checkoutContent')){const completed=!$('orderResult').hidden;$('emptyCheckout').hidden=cart.length>0||completed;$('checkoutContent').hidden=!cart.length&&!completed;}
}

function goShopping(){if($('collection'))$('collection').scrollIntoView({behavior:'smooth'});else location.href='bo-suu-tap.html'}
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
 $('checkoutForm').hidden = !$('orderResult').hidden;
 const quote=orderQuote();
 $('checkoutItems').innerHTML=orderItems();
 $('checkoutAmount').textContent=money(quote.amount);
 $('checkoutShipping').textContent=quote.shipping;
 $('checkoutTotal').textContent=quote.total;
 $('shippingNote').textContent=!quote.region?'Chọn khu vực để xem chi phí dự kiến.':quote.amount>=399000?'Đơn từ 399.000đ tiền sản phẩm được miễn phí giao hàng dự kiến.':quote.region==='hanoi'?'Phí giao nội thành Hà Nội dự kiến là 15.000đ.':'Phí giao dự kiến từ 25.000đ đến 40.000đ tùy địa chỉ và khối lượng. Tổng tiền là một khoảng ước tính, chưa chốt phí cụ thể.';
}
$('shippingRegion')?.addEventListener('change',renderCheckout);
function viewProduct(id){if(!$('productModalContent')){location.href='san-pham.html?id='+encodeURIComponent(id);return;}let p=products.find(x=>x.id===id&&!x.legacy);if(!p){$('productModalContent').innerHTML='<h1>Không tìm thấy sản phẩm</h1><a href="bo-suu-tap.html">Về bộ sưu tập</a>';return;}document.title=p.name+' | UnDo';
const variants=products.filter(v=>v.group===p.group);
const related=[...new Set(products.filter(v=>!v.legacy&&v.group!==p.group).map(v=>v.group))].slice(0,4).map(group=>{const list=products.filter(v=>v.group===group);return {first:list[0],count:list.length};});
$('productModalContent').innerHTML=`<div class="modal-product"><div class="product-gallery"><img id="modalImg" src="${p.img}" alt="${p.name} - ${p.vi}"/><div class="product-thumbs" role="group" aria-label="Xem nhanh các phân loại">${variants.map(v=>`<button type="button" class="product-thumb" data-variant="${v.id}" aria-pressed="${v.id===id}" aria-label="${escapeHtml(v.vi)}"><img src="${v.img}" loading="lazy" alt=""/></button>`).join('')}</div></div><div class="modal-details"><h1>${p.name}</h1><div class="price">${money(p.price)}</div><div class="product-buy-group"><strong>Phân loại: <span id="selectedColor">${p.vi}</span></strong><select id="productColor" aria-label="Chọn phân loại">${variants.map(v=>`<option value="${v.id}" ${v.id===id?'selected':''}>${v.vi}</option>`).join('')}</select><strong>Số lượng</strong><div class="product-purchase"><div class="qty"><button id="modalDec" disabled aria-label="Giảm số lượng">${storeIcons.minus}</button><span id="modalQty">1</span><button id="modalInc" aria-label="Tăng số lượng">${storeIcons.plus}</button></div><button class="btn" id="modalAdd">Thêm vào giỏ hàng</button></div></div><ul class="product-promises"><li>Miễn phí giao hàng cho đơn từ 399.000đ (nội thành Hà Nội 15.000đ).</li><li>Đổi trả trong 7 ngày nếu có lỗi sản xuất hoặc giao sai.</li><li>Bảo hành lỗi sản xuất trong 6 tháng từ ngày nhận hàng.</li></ul><p class="checkout-links"><a href="giao-hang-doi-tra.html">Giao hàng và đổi trả</a> <a href="bao-hanh.html">Bảo hành</a></p></div></div><div class="product-editorial"><div class="product-about"><h2>Về sản phẩm</h2><p class="product-description" id="productDescription">${escapeHtml(productDescriptions[p.group]||'')}</p><details class="product-help"><summary><span>Cách đặt, nhấc cốc và vệ sinh</span></summary><p>Đặt cốc thẳng đứng trên mặt bàn phẳng, sạch và nhẵn để đế hút bám chắc khi có va chạm ngang; khi uống chỉ cần nhấc thẳng đứng vuông góc với mặt bàn. Chừa 1,5 đến 2 cm dưới miệng cốc khi rót nước nóng, rửa tay bằng bọt biển mềm và không đưa vào lò vi sóng. <a href="huong-dan-su-dung.html">Xem hướng dẫn sử dụng đầy đủ.</a></p></details></div><div class="product-specs"><h2>Thông số tiêu chuẩn</h2><dl class="spec-list"><div><dt>Dung tích</dt><dd>Size M (400 ml)</dd></div><div><dt>Chất liệu lõi</dt><dd>Thép không gỉ inox 304, cách nhiệt 2 lớp</dd></div><div><dt>Giữ nhiệt</dt><dd>Nóng 4 đến 6 giờ, lạnh tới 12 giờ</dd></div><div><dt>Chống đổ</dt><dd>Đế hút chân không cho mặt bàn phẳng, nhẵn</dd></div><div><dt>Vệ sinh</dt><dd>Rửa tay bằng bọt biển mềm, không dùng lò vi sóng</dd></div></dl></div></div><section class="product-related" aria-labelledby="relatedTitle"><h2 id="relatedTitle">Các dòng cốc khác của UnDo</h2><div class="products">${related.map(r=>`<article class="product"><div class="product-art"><a href="san-pham.html?id=${r.first.id}"><img src="${r.first.img}" loading="lazy" alt="${r.first.name} - ${r.first.vi}"/></a></div><div class="product-info"><h3 class="product-title"><a class="product-name" href="san-pham.html?id=${r.first.id}">${r.first.name}</a></h3><div class="price">${money(r.first.price)}</div><p class="product-description">${r.count} phân loại</p><a class="mini-add" href="san-pham.html?id=${r.first.id}">Chọn phân loại</a></div></article>`).join('')}</div></section>`;
let selected=id,q=1;
const selectVariant=nextId=>{const pick=products.find(x=>x.id===nextId);if(!pick)return;selected=nextId;$('productColor').value=nextId;$('modalImg').src=pick.img;$('modalImg').alt=pick.name+' - '+pick.vi;$('selectedColor').textContent=pick.vi;if($('productDescription'))$('productDescription').textContent=productDescriptions[pick.group]||'';document.querySelectorAll('.product-thumb').forEach(btn=>btn.setAttribute('aria-pressed',String(btn.dataset.variant===nextId)));history.replaceState(null,'','san-pham.html?id='+encodeURIComponent(nextId))};
$('modalDec')?.addEventListener('click',()=>{$('modalQty').textContent=q=Math.max(1,q-1);$('modalDec').disabled=q===1;$('modalInc').disabled=q===99});$('modalInc')?.addEventListener('click',()=>{$('modalQty').textContent=q=Math.min(99,q+1);$('modalDec').disabled=q===1;$('modalInc').disabled=q===99});
$('productColor')?.addEventListener('change',e=>selectVariant(e.target.value));
document.querySelectorAll('.product-thumb').forEach(btn=>btn.addEventListener('click',()=>selectVariant(btn.dataset.variant)));
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
$('searchForm')?.addEventListener('submit',e=>{e.preventDefault();if(!$('productGrid')){location.href='bo-suu-tap.html?q='+encodeURIComponent($('searchInput').value.trim());return;}renderProducts();closeSearch();$('collection').tabIndex=-1;$('collection').focus({preventScroll:true});goShopping()});
function closeMobile(){if(!$('mobileMenu'))return;$('mobileMenu').classList.remove('open');$('menuToggle').setAttribute('aria-expanded','false')}
$('menuToggle')?.addEventListener('click',()=>{closeSearch();let on=$('mobileMenu').classList.toggle('open');$('menuToggle').setAttribute('aria-expanded',String(on))});$('mobileMenu')?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMobile));
$('newsletterForm')?.addEventListener('submit',e=>{e.preventDefault();toast('Cảm ơn bạn!');e.target.reset()});
$('checkoutForm')?.addEventListener('input',e=>{if(e.target.setCustomValidity)e.target.setCustomValidity('')});
let orderApproved=false;
const paymentLabels = new Map([
  ['cod', 'Thanh toán khi nhận hàng (COD)'],
  ['transfer', 'Chuyển khoản ngân hàng']
]);
function backToCheckout(){close();$('checkoutForm').querySelector('button[type=submit]').focus({preventScroll:true})}
$('confirmOrderBack')?.addEventListener('click',backToCheckout);
$('confirmOrderClose')?.addEventListener('click',backToCheckout);
$('confirmOrderYes')?.addEventListener('click',()=>{orderApproved=true;close();$('checkoutForm').requestSubmit();orderApproved=false});
$('checkoutForm')?.addEventListener('submit',e=>{
 e.preventDefault();$('orderSaveError').hidden=true;if(!cart.length||!e.target.reportValidity())return;
 const data=new FormData(e.target);
 const name=String(data.get('name')||'').trim();
 if(!name){e.target.elements.name.setCustomValidity('Vui lòng nhập họ và tên.');e.target.elements.name.reportValidity();return;}
 const phone=String(data.get('phone')||'').trim(),address=String(data.get('address')||'').trim();
 if(!phone||address.length<5){const field=!phone?e.target.elements.phone:e.target.elements.address;field.setCustomValidity('Vui lòng nhập thông tin hợp lệ.');field.reportValidity();return;}
 const quote=orderQuote();if(!['hanoi','other'].includes(quote.region))return;
 const payment = data.get('payment');
 if (!paymentLabels.has(payment)) return;
 if (!orderApproved) {
   $('confirmOrderPayment').textContent = paymentLabels.get(payment);
   $('confirmOrderTotal').textContent = 'Tổng dự kiến: ' + quote.total;
   open('confirmOrderModal');
   return;
 }
 let order;
 try {
   order = saveOrder(quote, payment);
 } catch {
   const error = $('orderSaveError');
   error.textContent = 'Không thể lưu đơn hàng. Vui lòng kiểm tra cài đặt lưu trữ của trình duyệt và thử lại.';
   error.hidden = false;
   return;
 }
 const region=quote.region==='hanoi'?'Nội thành Hà Nội':'Các khu vực còn lại';
 $('orderResult').hidden=false;$('orderResult').className='modal-alert';
 $('orderResult').innerHTML=`<p>Mã đơn hàng: <b>${order.code}</b></p><p>${paymentLabels.get(order.payment)} · ${paymentStatus(order)}</p><p>Người nhận: <b>${escapeHtml(name)}</b><br/>Điện thoại: ${escapeHtml(phone)}<br/>Địa chỉ: ${escapeHtml(address)}<br/>Khu vực giao hàng: ${region}.</p>${data.get('email')?`<p>Email: ${escapeHtml(String(data.get('email')))}</p>`:''}${data.get('note')?`<p>Ghi chú: ${escapeHtml(String(data.get('note')))}</p>`:''}<ul class="order-items">${orderItems()}</ul><dl class="order-totals"><div><dt>Tiền sản phẩm</dt><dd>${money(quote.amount)}</dd></div><div><dt>Phí giao dự kiến</dt><dd>${quote.shipping}</dd></div><div class="order-total"><dt>Tổng dự kiến</dt><dd>${quote.total}</dd></div></dl><div class="added-actions"><a class="btn small" href="${trackingLink(order.code)}">Theo dõi đơn hàng</a><button type="button" class="btn small secondary" id="continueShop">Tiếp tục mua sắm</button></div>`;
 const status=$('checkoutContent').querySelector('h1');status.id='orderStatus';status.tabIndex=-1;status.textContent='Đã xác nhận đặt hàng';document.querySelector('.checkout-page>.support-back').hidden=true;document.title='Đã xác nhận đặt hàng | UnDo';$('checkoutHelp').hidden=true;
 $('checkoutForm').hidden=true;cart=[];save();renderCart();e.target.reset();$('orderStatus').focus({preventScroll:true});$('orderStatus').scrollIntoView({block:'start',behavior:'instant'});
 $('continueShop')?.addEventListener('click',()=>{close();goShopping()});
});
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
const historyPage = 'lich-su-mua-hang.html';
const historyLogin = 'dang-nhap.html?next=lich-su-mua-hang';
const returnToHistory = new URLSearchParams(location.search).get('next') === 'lich-su-mua-hang';
const orderCodePattern = /^UNDO-[0-9A-F]{12}$/;
const orderDate = new Intl.DateTimeFormat('vi-VN', { dateStyle: 'medium', timeStyle: 'short' });

function trackingLink(code) {
  return 'theo-doi-don-hang.html#' + code;
}

function paymentStatus(order) {
  return order.payment === 'transfer' ? 'Chờ thanh toán' : 'Thanh toán khi nhận hàng';
}

function historyKey() {
  const credentials = JSON.parse(sessionStorage.getItem(credentialsKey));
  return 'undo_order_history_' + credentials.salt.join('-');
}

function historyCodes(key) {
  const codes = JSON.parse(sessionStorage.getItem(key));
  return Array.isArray(codes) ? codes.filter(code => orderCodePattern.test(code)) : [];
}

function saveOrder(quote, payment) {
  const bytes = crypto.getRandomValues(new Uint8Array(6));
  const code = 'UNDO-' + Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('').toUpperCase();
  const order = {
    code,
    createdAt: Date.now(),
    status: 'Đã đặt hàng',
    payment,
    amount: quote.amount,
    shipping: quote.shipping,
    total: quote.total,
    items: cart.map(({ id, qty }) => {
      const { name, vi, price } = products.find(product => product.id === id);
      return { name, variant: vi, price, qty };
    })
  };
  const key = 'undo_order_' + code;
  localStorage.setItem(key, JSON.stringify(order));
  try {
    if (signedIn) {
      const accountHistory = historyKey();
      sessionStorage.setItem(accountHistory, JSON.stringify([code, ...historyCodes(accountHistory)]));
    }
  } catch (error) {
    localStorage.removeItem(key);
    throw error;
  }
  return order;
}

function readOrder(code) {
  if (!orderCodePattern.test(code)) return null;
  const order = read('order_' + code, null);
  if (order?.code !== code || !paymentLabels.has(order.payment) ||
      !Number.isFinite(order.createdAt) || Number.isNaN(new Date(order.createdAt).valueOf()) ||
      !Number.isFinite(order.amount) || typeof order.shipping !== 'string' ||
      typeof order.total !== 'string' || typeof order.status !== 'string' || !Array.isArray(order.items)) return null;
  if (!order.items.every(item => item && typeof item.name === 'string' &&
      typeof item.variant === 'string' && Number.isFinite(item.price) && Number.isInteger(item.qty))) return null;
  return order;
}

const trackOrderForm = $('trackOrderForm');
if (trackOrderForm) {
  const field = $('trackingCode');
  const message = $('trackingMessage');
  const details = $('trackedOrder');

  function showTrackedOrder(code, focusResult = false) {
    const order = readOrder(code);
    details.hidden = !order;
    details.replaceChildren();
    message.hidden = !code || Boolean(order);
    message.textContent = message.hidden ? '' : 'Không tìm thấy đơn hàng. Kiểm tra lại mã đơn và trình duyệt đã dùng để đặt hàng.';
    field.setAttribute('aria-invalid', String(!message.hidden));
    if (!order) return;

    const items = order.items.map(item => `<li><span>${escapeHtml(item.name)} / ${escapeHtml(item.variant)} × ${item.qty}</span><strong>${money(item.price * item.qty)}</strong></li>`).join('');
    details.innerHTML = `
      <h2 id="trackedOrderTitle" tabindex="-1">Đơn hàng <span>${order.code}</span></h2>
      <p><time datetime="${new Date(order.createdAt).toISOString()}">${orderDate.format(order.createdAt)}</time></p>
      <dl class="order-totals">
        <div><dt>Trạng thái đơn hàng</dt><dd>${escapeHtml(order.status)}</dd></div>
        <div><dt>Phương thức thanh toán</dt><dd>${paymentLabels.get(order.payment)}</dd></div>
        ${order.payment === 'transfer' ? '<div><dt>Trạng thái thanh toán</dt><dd>Chờ thanh toán</dd></div>' : ''}
      </dl>
      <ul class="order-items" aria-label="Sản phẩm đã đặt">${items}</ul>
      <dl class="order-totals">
        <div><dt>Tiền sản phẩm</dt><dd>${money(order.amount)}</dd></div>
        <div><dt>Phí giao dự kiến</dt><dd>${escapeHtml(order.shipping)}</dd></div>
        <div class="order-total"><dt>Tổng dự kiến</dt><dd>${escapeHtml(order.total)}</dd></div>
      </dl>`;
    if (focusResult) $('trackedOrderTitle').focus();
  }

  function readTrackingLink() {
    field.value = location.hash.slice(1).toUpperCase();
    showTrackedOrder(field.value);
  }

  trackOrderForm.hidden = false;
  trackOrderForm.addEventListener('submit', event => {
    event.preventDefault();
    const code = field.value.trim().toUpperCase();
    field.value = code;
    history.replaceState(null, '', orderCodePattern.test(code) ? '#' + code : location.pathname);
    showTrackedOrder(code, true);
  });
  field.addEventListener('input', () => {
    field.removeAttribute('aria-invalid');
    message.hidden = true;
  });
  window.addEventListener('hashchange', readTrackingLink);
  readTrackingLink();
}

function renderOrderHistory() {
  const list = $('orderHistory');
  if (!list) return;
  if (!signedIn || !profile) {
    list.replaceChildren();
    location.replace(historyLogin);
    return;
  }
  let orders = [];
  try {
    orders = historyCodes(historyKey()).map(readOrder).filter(Boolean);
  } catch {}
  $('orderHistoryEmpty').hidden = orders.length > 0;
  list.hidden = !orders.length;
  list.innerHTML = orders.map(order => `
    <li>
      <div>
        <h2>${order.code}</h2>
        <p><time datetime="${new Date(order.createdAt).toISOString()}">${orderDate.format(order.createdAt)}</time></p>
        <p>${escapeHtml(order.status)} · ${escapeHtml(order.total)}</p>
      </div>
      <a class="btn small secondary" href="${trackingLink(order.code)}" aria-label="Xem đơn hàng ${order.code}">Xem đơn hàng</a>
    </li>`).join('');
}

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
renderOrderHistory();
if (returnToHistory && $('accountGuest')) {
  $('showRegister').href = 'dang-ky.html?next=lich-su-mua-hang';
  $('registerBack').href = historyLogin;
  if (signedIn) location.replace(historyPage);
}
async function passwordVerifier(password,salt){
 const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveBits']);
 const bits=await crypto.subtle.deriveBits({name:'PBKDF2',salt:new Uint8Array(salt),iterations:600000,hash:'SHA-256'},key,256);
 return Array.from(new Uint8Array(bits),n=>n.toString(16).padStart(2,'0')).join('');
}
function accountError(message){$('accountError').textContent=message;$('accountError').hidden=false;}
function resetPasswords(form){form.querySelectorAll('[data-password-toggle]').forEach(button=>{const input=$(button.dataset.passwordToggle);input.type='password';button.innerHTML=storeIcons.eye;button.setAttribute('aria-pressed','false');button.setAttribute('aria-label','Hiện '+(input.id==='confirmPassword'?'nhập lại mật khẩu':'mật khẩu'))})}
document.querySelectorAll('[data-password-toggle]').forEach(button=>button.addEventListener('click',()=>{const input=$(button.dataset.passwordToggle),show=input.type==='password';input.type=show?'text':'password';button.innerHTML=storeIcons[show?'eye-off':'eye'];button.setAttribute('aria-pressed',String(show));button.setAttribute('aria-label',(show?'Ẩn ':'Hiện ')+(input.id==='confirmPassword'?'nhập lại mật khẩu':'mật khẩu'))}));
$('loginForm')?.addEventListener('submit',async e=>{
 e.preventDefault();const form=e.target;if(!form.reportValidity())return;
 const button=form.querySelector('[type=submit]');if(button.disabled)return;button.disabled=true;button.textContent='Đang đăng nhập…';$('accountError').hidden=true;
 try{
  const credentials=JSON.parse(sessionStorage.getItem(credentialsKey));
  const email=form.elements.email.value.trim().toLowerCase();
  if(!credentials||!profile||credentials.email!==email||await passwordVerifier(form.elements.password.value,credentials.salt)!==credentials.verifier){accountError('Email hoặc mật khẩu không đúng.');return}
  sessionStorage.setItem(sessionKey,'guest');signedIn=true;form.reset();resetPasswords(form);if(returnToHistory){location.replace(historyPage);return}renderAccount();$('accountContinue').focus({preventScroll:true});toast('Đã đăng nhập');
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
  profile=next;signedIn=true;form.reset();resetPasswords(form);if(returnToHistory){location.replace(historyPage);return}renderAccount();$('accountContinue').focus({preventScroll:true});toast('Đã tạo tài khoản');
 }catch{accountError('Không thể tạo tài khoản lúc này. Vui lòng kiểm tra cài đặt trình duyệt.');}
 finally{button.disabled=false;button.textContent='Tạo tài khoản';}
});
for(const form of [$('registerForm'),$('loginForm')])form?.addEventListener('input',e=>{if(e.target.setCustomValidity)e.target.setCustomValidity('');if(form.id==='registerForm'&&e.target.name==='password')form.elements.confirmPassword.setCustomValidity('');$('accountError').hidden=true;});
$('accountContinue')?.addEventListener('click',()=>{location.href='bo-suu-tap.html'});
window.addEventListener('pageshow',event=>{if(!event.persisted)return;const saved=read('cart',[]);cart=Array.isArray(saved)?saved.filter(it=>products.some(p=>p.id===it.id)&&Number.isInteger(it.qty)&&it.qty>0&&it.qty<=99):[];try{signedIn=sessionStorage.getItem(sessionKey)==='guest'&&!!sessionStorage.getItem('undo_session_credentials');const value=JSON.parse(sessionStorage.getItem(profileKey));profile=value&&typeof value.name==='string'&&typeof value.email==='string'&&value.name.length<=100&&value.email.length<=254?value:null}catch{}renderAccount();renderOrderHistory();renderCart();renderCheckout()});
window.addEventListener('storage',e=>{if(e.key!=='undo_cart'&&e.key!==null)return;const saved=read('cart',[]);cart=Array.isArray(saved)?saved.filter(it=>products.some(p=>p.id===it.id)&&Number.isInteger(it.qty)&&it.qty>0&&it.qty<=99):[];if(active==='confirmOrderModal')backToCheckout();renderCart();renderCheckout()});
renderProducts();renderCart();renderCheckout();
if($('productModalContent'))viewProduct(new URLSearchParams(location.search).get('id')||'p1v1');
if(location.pathname.endsWith('/dang-ky.html')&&!signedIn){$('accountGuest').hidden=true;$('registerForm').hidden=false;$('accountTitle').textContent='Tạo tài khoản'}
if($('productGrid')){const q=new URLSearchParams(location.search).get('q');if(q){search=q;$('searchInput').value=q;renderProducts()}}
})();
