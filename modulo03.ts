/*interface IceCream{
    flavor: String;
    scoops: number;
    instructions? : String;
}


interface Sundae extends IceCream{
sauce: "chocolate" | "caramel" | "strawberries";
nuts?: boolean;
whippedCream? : boolean;
instructions?:String;


}

let myIceCream : Sundae = {
    flavor : "Bulto´s House",
    scoops : 2,
    sauce: "strawberries"
}



function CheckScoops (potre : Sundae){
    if(potre.scoops >= 5){
        return potre.scoops +" NO HAY MAS HELAO!!!!!!!!! "
    }else{
        return potre.scoops +" hay elao "
    }
}

console.log(CheckScoops({flavor: 'Bulto´s House', scoops: 3, sauce: "caramel"}));


interface IceCreamArray {
    [index: number]: string;
}

let myIceCream: IceCreamArray;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream[0];
console.log(myStr);

*/


interface Prestamo{
    principal:number;
    interestRate: number;
    months:number;
    }
    
    
    interface PrestamoConvencional extends Prestamo{
        months:number;
    
    }
    
    function CalculoDeIntereses(terminos : Prestamo) : string{
        let intereses = terminos.interestRate /1200;
        let pago;
        pago = terminos.principal * intereses / (1 - (Math.pow(1/(1 + intereses), terminos.interestRate)));
        return "EL pago total es de: " + pago ;
        
    }
    
    let calculo = CalculoDeIntereses({principal : 30000, interestRate:300, months:12});
    console.log(calculo);