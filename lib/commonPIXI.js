class commonPIXI
{
    constructor(_PIXI)
    {
        this.PIXI = _PIXI;
    };
    SetRec(pointX,pointY,width,height,color=0x8A2BE2)
    {
        let 
        rect = new this.PIXI.Graphics();
        rect.beginFill(color);
        rect.drawRect(0,0,width,height);
//        rect.position.set(pointX,pointY);
        rect.pivot.x = pointX;
        rect.pivot.y = pointY;
        rect.endFill();
        return rect;
    };
    Setmsg(word,pointX,pointY)
    {
        let style = new PIXI.TextStyle
        ({
//            fontFamily: "Arial",
            fontFamily: "BauHaus 93",
            fontSize: 24,
            fill: "white",
//            stroke: '#ff3300',
            stroke: '#000000',
            strokeThickness: 4,
//            dropShadow: true,
//            dropShadowColor: "#ff3300",
//            dropShadowBlur: 4,
//            dropShadowAngle: Math.PI / 6,
//            dropShadowDistance: 6,
        });
        let message3 = new PIXI.Text(word,style);
        message3.anchor.set(0.5);
        message3.position.set(pointX,pointY);
        return message3;
    }
    
    
}