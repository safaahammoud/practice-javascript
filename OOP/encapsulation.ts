class knight {
    color:string;
    captured:boolean;
    private positon:string;

    move(){

    }
    setColor(color:string):void{
        this.color = color
    
    }
    getColor():string {
        return this.color;
    }

    getPosition(){
        return this.positon;
    }
}

const knightObject = new knight();
