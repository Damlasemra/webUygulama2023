function addToCart(urun_adi,adet,fiyat){
    console.log(urun_adi)
    console.log(adet)
    console.log(fiyat)

}
addToCart('elma',5,10)
addToCart('armut',2,20)
addToCart('limon',3,15)

let urunler=[{urun_adi:'elma',fiyat:5,adet:10}]



function topla(...sayilar){
    let toplam=0
    for(let i=0;i <sayilar.length;i++){
        toplam=toplam+sayilar[i]
    }
    console.log(toplam)
}
topla(10,20)



let[birinci,ikinci,ucuncu]=[{adi:'iç anadolu',nufus:'20m'},
                             {adi:'akdeniz',nufus:'10m'}]

console.log(birinci)




//conditional ternary operator
let a = 102
if(a<100){
    console.log('100 den küçük sayılar')
}else if(a==100){
    console.log('100 e eşit')
}
else{
    console.log('100 den büyük')
}
const sonuc=a==100?'100 e eşit':'100 eşit değil'
console.log(sonuc)







///diziler
const sayılar=[1,2,3,4,5,6,7,8,9]
const ciftsayılar=sayılar.filter(function(sayılar){
    return sayılar%2==0
})
console.log(ciftsayılar)

//2.yol
const ciftsayılar=sayılar.filter((sayılar)=>sayılar%2==0)
console.log(ciftsayılar)





const sayi=









