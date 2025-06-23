  import {Product, Clothing, Appliance } from '../../data/products.js';

  function addProduct(dict){

        if(dict.type === 'clothing'){
            return new Clothing(dict);
        }else if(dict.type === 'appliance'){
            return new Appliance(dict);
        }else{
            return new Product(dict);
        }

  }



describe("test Suite: product functions ", ()=>{

    let items =[{
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        image: "images/products/athletic-cotton-socks-6-pairs.jpg",
        name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
        rating: {
        stars: 4.5,
        count: 87
        },
        priceCents: 1090,
        keywords: [
        "socks",
        "sports",
        "apparel"
        ]
    },
    {
        id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
        name: "Adults Plain Cotton T-Shirt - 2 Pack",
        rating: {
        stars: 4.5,
        count: 56
        },
        priceCents: 799,
        keywords: [
        "tshirts",
        "apparel",
        "mens"
        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
    },
    {
        id: "54e0eccd-8f36-462b-b68a-8182611d9add",
        image: "images/products/black-2-slot-toaster.jpg",
        name: "2 Slot Toaster - Black",
        rating: {
        stars: 5,
        count: 2197
        },
        priceCents: 1899,
        keywords: [
        "toaster",
        "kitchen",
        "appliances"
        ],
        type:"appliance",
        instructionsLink: "../images/appliance-instructions.png",
        warrantyLink:"../images/appliance-warranty.png"
    }
    ].map((item)=>{
        if(item.type === 'clothing'){
            return new Clothing(item);
        }else if(item.type === 'appliance'){
            return new Appliance(item);
        }else{
            return new Product(item);
        }
    });



    it("add product",()=>{
        items.push(
            addProduct({
                id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
                image: "images/products/electric-glass-and-steel-hot-water-kettle.webp",
                name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
                rating: {
                stars: 5,
                count: 846
                },
                priceCents: 3074,
                keywords: [
                "water boiler",
                "appliances",
                "kitchen"
                ],
                type:"appliance",
                instructionsLink: "../images/appliance-instructions.png",
                warrantyLink:"../images/appliance-warranty.png"
                }
            )
        );

        const index = items.length-1;
        expect(items[index].constructor.name).toEqual("Appliance");
        expect(items[index].id).toEqual('c2a82c5e-aff4-435f-9975-517cfaba2ece');
        expect(items[index].image).toEqual("images/products/electric-glass-and-steel-hot-water-kettle.webp");
        expect(items[index].name).toEqual("Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter");
        expect(items[index].instructionsLink).toEqual("../images/appliance-instructions.png");
        expect(items[index].warrantyLink).toEqual("../images/appliance-warranty.png");
    });
});