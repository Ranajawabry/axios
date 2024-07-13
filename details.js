const getproduct = async () =>{
const prams = new URLSearchParams (window.location.search);
const id = prams.get('id');
 const {data} = await axios.get(`https://dummyjson.com/products/${id}`);
 return data;
}
const disPlayProduct = async ()=>{
const data = await getproduct();

const image = data.images.map((img)=>{
return `
<img src=${img}>
`;
}).join('');

const result = `
<h2>${data.title}</h2>

`;
 
document.querySelector(".products_img").innerHTML=image;
document.querySelector(".products").innerHTML=result;




};
disPlayProduct();
