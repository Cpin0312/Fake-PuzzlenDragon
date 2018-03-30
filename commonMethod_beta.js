class commonMethod
{
 
    //Set Mouse Event
    subscribe(obj)
    {
        obj.interactive = true;
        obj.buttonMode= true;
        obj.on('pointerdown',dragDown);
        obj.on('pointerup',dragUp);
        obj.on('pointermove',dragMove);
        return obj;
    }
       
    SetmsgColor(textSprite,color)
    {
        var sprite_Text = textSprite;
        sprite_Text.style = {
            fontFamily: "BauHaus 93",
            fontSize: 24,
            fill: color,
            stroke: '#000000',
            strokeThickness: 4,
        };
        return sprite_Text;
    }
    
    //This Method look like public on the world
    GetRandomInt(min,max)
    {
        return Math.floor( Math.random() * (max - min + 1) ) + min;
    };
    
    //This Method look like public on the world
    keyboard(keyCode) 
    {
      let key = {};
      key.code = keyCode;
      key.isDown = false;
      key.isUp = true;
      key.press = undefined;
      key.release = undefined;
      //The `downHandler`
      key.downHandler = event => {
        if (event.keyCode === key.code) {
          if (key.isUp && key.press) key.press();
          key.isDown = true;
          key.isUp = false;
        }
        event.preventDefault();
      };

      //The `upHandler`
      key.upHandler = event => {
        if (event.keyCode === key.code) {
          if (key.isDown && key.release) key.release();
          key.isDown = false;
          key.isUp = true;
        }
        event.preventDefault();
      };

      //Attach event listeners
      window.addEventListener(
        "keydown", key.downHandler.bind(key), false
      );
      window.addEventListener(
        "keyup", key.upHandler.bind(key), false
      );
      return key;
    };
    
    hitTestRectangle(r1, r2) 
    {
      //Define the variables we'll need to calculate
      let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

      //hit will determine whether there's a collision
      hit = false;

      //Find the center points of each sprite
      r1.centerX = r1.x + r1.width / 2;
      r1.centerY = r1.y + r1.height / 2;
      r2.centerX = r2.x + r2.width / 2;
      r2.centerY = r2.y + r2.height / 2;

      //Find the half-widths and half-heights of each sprite
      r1.halfWidth = r1.width / 2;
      r1.halfHeight = r1.height / 2;
      r2.halfWidth = r2.width / 2;
      r2.halfHeight = r2.height / 2;

      //Calculate the distance vector between the sprites
      vx = r1.centerX - r2.centerX;
      vy = r1.centerY - r2.centerY;

      //Figure out the combined half-widths and half-heights
      combinedHalfWidths = r1.halfWidth + r2.halfWidth;
      combinedHalfHeights = r1.halfHeight + r2.halfHeight;

      //Check for a collision on the x axis
      if (Math.abs(vx) < combinedHalfWidths) {

        //A collision might be occuring. Check for a collision on the y axis
        if (Math.abs(vy) < combinedHalfHeights) {

          //There's definitely a collision happening
          hit = true;
        } else {

          //There's no collision on the y axis
          hit = false;
        }
      } else {

        //There's no collision on the x axis
        hit = false;
      }

      //`hit` will be either `true` or `false`
      return hit;
    };
    
    contain(sprite, container) 
    {
        let collision = undefined;
        //Left
        if (sprite.x < container.x) {
        sprite.x = container.x;
        collision = "left";
        }
        //Top
        if (sprite.y < container.y) {
        sprite.y = container.y;
        collision = "top";
        }
        //Right
        if (sprite.x + sprite.width > container.width) {
        sprite.x = container.width - sprite.width;
        collision = "right";
        }
        //Bottom
        if (sprite.y + sprite.height > container.height) {
        sprite.y = container.height - sprite.height;
        collision = "bottom";
        }
        //Return the `collision` value
        return collision;
    };
    
    GetColorCode(strColor)
    {
    	//make sure input word have been upperCase 
    	let colorName = strColor.toUpperCase();
        if(colorName == 'BLACK') return 0x000000;
        if(colorName == 'NAVY') return 0x000080;
        if(colorName == 'DARKBLUE') return 0x00008B;
        if(colorName == 'MEDIUMBLUE') return 0x0000CD;
        if(colorName == 'BLUE') return 0x0000FF;
        if(colorName == 'DARKGREEN') return 0x006400;
        if(colorName == 'GREEN') return 0x008000;
        if(colorName == 'TEAL') return 0x008080;
        if(colorName == 'DARKCYAN') return 0x008B8B;
        if(colorName == 'DEEPSKYBLUE') return 0x00BFFF;
        if(colorName == 'DARKTURQUOISE') return 0x00CED1;
        if(colorName == 'MEDIUMSPRINGGREEN') return 0x00FA9A;
        if(colorName == 'LIME') return 0x00FF00;
        if(colorName == 'SPRINGGREEN') return 0x00FF7F;
        if(colorName == 'AQUA') return 0x00FFFF;
        if(colorName == 'CYAN') return 0x00FFFF;
        if(colorName == 'MIDNIGHTBLUE') return 0x191970;
        if(colorName == 'DODGERBLUE') return 0x1E90FF;
        if(colorName == 'LIGHTSEAGREEN') return 0x20B2AA;
        if(colorName == 'FORESTGREEN') return 0x228B22;
        if(colorName == 'SEAGREEN') return 0x2E8B57;
        if(colorName == 'DARKSLATEGRAY') return 0x2F4F4F;
        if(colorName == 'DARKSLATEGREY') return 0x2F4F4F;
        if(colorName == 'LIMEGREEN') return 0x32CD32;
        if(colorName == 'MEDIUMSEAGREEN') return 0x3CB371;
        if(colorName == 'TURQUOISE') return 0x40E0D0;
        if(colorName == 'ROYALBLUE') return 0x4169E1;
        if(colorName == 'STEELBLUE') return 0x4682B4;
        if(colorName == 'DARKSLATEBLUE') return 0x483D8B;
        if(colorName == 'MEDIUMTURQUOISE') return 0x48D1CC;
        if(colorName == 'INDIGO') return 0x4B0082;
        if(colorName == 'DARKOLIVEGREEN') return 0x556B2F;
        if(colorName == 'CADETBLUE') return 0x5F9EA0;
        if(colorName == 'CORNFLOWERBLUE') return 0x6495ED;
        if(colorName == 'REBECCAPURPLE') return 0x663399;
        if(colorName == 'MEDIUMAQUAMARINE') return 0x66CDAA;
        if(colorName == 'DIMGRAY') return 0x696969;
        if(colorName == 'DIMGREY') return 0x696969;
        if(colorName == 'SLATEBLUE') return 0x6A5ACD;
        if(colorName == 'OLIVEDRAB') return 0x6B8E23;
        if(colorName == 'SLATEGRAY') return 0x708090;
        if(colorName == 'SLATEGREY') return 0x708090;
        if(colorName == 'LIGHTSLATEGRAY') return 0x778899;
        if(colorName == 'LIGHTSLATEGREY') return 0x778899;
        if(colorName == 'MEDIUMSLATEBLUE') return 0x7B68EE;
        if(colorName == 'LAWNGREEN') return 0x7CFC00;
        if(colorName == 'CHARTREUSE') return 0x7FFF00;
        if(colorName == 'AQUAMARINE') return 0x7FFFD4;
        if(colorName == 'MAROON') return 0x800000;
        if(colorName == 'PURPLE') return 0x800080;
        if(colorName == 'OLIVE') return 0x808000;
        if(colorName == 'GRAY') return 0x808080;
        if(colorName == 'GREY') return 0x808080;
        if(colorName == 'SKYBLUE') return 0x87CEEB;
        if(colorName == 'LIGHTSKYBLUE') return 0x87CEFA;
        if(colorName == 'BLUEVIOLET') return 0x8A2BE2;
        if(colorName == 'DARKRED') return 0x8B0000;
        if(colorName == 'DARKMAGENTA') return 0x8B008B;
        if(colorName == 'SADDLEBROWN') return 0x8B4513;
        if(colorName == 'DARKSEAGREEN') return 0x8FBC8F;
        if(colorName == 'LIGHTGREEN') return 0x90EE90;
        if(colorName == 'MEDIUMPURPLE') return 0x9370DB;
        if(colorName == 'DARKVIOLET') return 0x9400D3;
        if(colorName == 'PALEGREEN') return 0x98FB98;
        if(colorName == 'DARKORCHID') return 0x9932CC;
        if(colorName == 'YELLOWGREEN') return 0x9ACD32;
        if(colorName == 'SIENNA') return 0xA0522D;
        if(colorName == 'BROWN') return 0xA52A2A;
        if(colorName == 'DARKGRAY') return 0xA9A9A9;
        if(colorName == 'DARKGREY') return 0xA9A9A9;
        if(colorName == 'LIGHTBLUE') return 0xADD8E6;
        if(colorName == 'GREENYELLOW') return 0xADFF2F;
        if(colorName == 'PALETURQUOISE') return 0xAFEEEE;
        if(colorName == 'LIGHTSTEELBLUE') return 0xB0C4DE;
        if(colorName == 'POWDERBLUE') return 0xB0E0E6;
        if(colorName == 'FIREBRICK') return 0xB22222;
        if(colorName == 'DARKGOLDENROD') return 0xB8860B;
        if(colorName == 'MEDIUMORCHID') return 0xBA55D3;
        if(colorName == 'ROSYBROWN') return 0xBC8F8F;
        if(colorName == 'DARKKHAKI') return 0xBDB76B;
        if(colorName == 'SILVER') return 0xC0C0C0;
        if(colorName == 'MEDIUMVIOLETRED') return 0xC71585;
        if(colorName == 'INDIANRED') return 0xCD5C5C;
        if(colorName == 'PERU') return 0xCD853F;
        if(colorName == 'CHOCOLATE') return 0xD2691E;
        if(colorName == 'TAN') return 0xD2B48C;
        if(colorName == 'LIGHTGRAY') return 0xD3D3D3;
        if(colorName == 'LIGHTGREY') return 0xD3D3D3;
        if(colorName == 'THISTLE') return 0xD8BFD8;
        if(colorName == 'ORCHID') return 0xDA70D6;
        if(colorName == 'GOLDENROD') return 0xDAA520;
        if(colorName == 'PALEVIOLETRED') return 0xDB7093;
        if(colorName == 'CRIMSON') return 0xDC143C;
        if(colorName == 'GAINSBORO') return 0xDCDCDC;
        if(colorName == 'PLUM') return 0xDDA0DD;
        if(colorName == 'BURLYWOOD') return 0xDEB887;
        if(colorName == 'LIGHTCYAN') return 0xE0FFFF;
        if(colorName == 'LAVENDER') return 0xE6E6FA;
        if(colorName == 'DARKSALMON') return 0xE9967A;
        if(colorName == 'VIOLET') return 0xEE82EE;
        if(colorName == 'PALEGOLDENROD') return 0xEEE8AA;
        if(colorName == 'LIGHTCORAL') return 0xF08080;
        if(colorName == 'KHAKI') return 0xF0E68C;
        if(colorName == 'ALICEBLUE') return 0xF0F8FF;
        if(colorName == 'HONEYDEW') return 0xF0FFF0;
        if(colorName == 'AZURE') return 0xF0FFFF;
        if(colorName == 'SANDYBROWN') return 0xF4A460;
        if(colorName == 'WHEAT') return 0xF5DEB3;
        if(colorName == 'BEIGE') return 0xF5F5DC;
        if(colorName == 'WHITESMOKE') return 0xF5F5F5;
        if(colorName == 'MINTCREAM') return 0xF5FFFA;
        if(colorName == 'GHOSTWHITE') return 0xF8F8FF;
        if(colorName == 'SALMON') return 0xFA8072;
        if(colorName == 'ANTIQUEWHITE') return 0xFAEBD7;
        if(colorName == 'LINEN') return 0xFAF0E6;
        if(colorName == 'LIGHTGOLDENRODYELLOW') return 0xFAFAD2;
        if(colorName == 'OLDLACE') return 0xFDF5E6;
        if(colorName == 'RED') return 0xFF0000;
        if(colorName == 'FUCHSIA') return 0xFF00FF;
        if(colorName == 'MAGENTA') return 0xFF00FF;
        if(colorName == 'DEEPPINK') return 0xFF1493;
        if(colorName == 'ORANGERED') return 0xFF4500;
        if(colorName == 'TOMATO') return 0xFF6347;
        if(colorName == 'HOTPINK') return 0xFF69B4;
        if(colorName == 'CORAL') return 0xFF7F50;
        if(colorName == 'DARKORANGE') return 0xFF8C00;
        if(colorName == 'LIGHTSALMON') return 0xFFA07A;
        if(colorName == 'ORANGE') return 0xFFA500;
        if(colorName == 'LIGHTPINK') return 0xFFB6C1;
        if(colorName == 'PINK') return 0xFFC0CB;
        if(colorName == 'GOLD') return 0xFFD700;
        if(colorName == 'PEACHPUFF') return 0xFFDAB9;
        if(colorName == 'NAVAJOWHITE') return 0xFFDEAD;
        if(colorName == 'MOCCASIN') return 0xFFE4B5;
        if(colorName == 'BISQUE') return 0xFFE4C4;
        if(colorName == 'MISTYROSE') return 0xFFE4E1;
        if(colorName == 'P1_BLANCHEDALMOND') return 0xFFEBCD;
        if(colorName == 'P1_PAPAYAWHIP') return 0xFFEFD5;
        if(colorName == 'LAVENDERBLUSH') return 0xFFF0F5;
        if(colorName == 'SEASHELL') return 0xFFF5EE;
        if(colorName == 'CORNSILK') return 0xFFF8DC;
        if(colorName == 'LEMONCHIFFON') return 0xFFFACD;
        if(colorName == 'FLORALWHITE') return 0xFFFAF0;
        if(colorName == 'SNOW') return 0xFFFAFA;
        if(colorName == 'YELLOW') return 0xFFFF00;
        if(colorName == 'LIGHTYELLOW') return 0xFFFFE0;
        if(colorName == 'IVORY') return 0xFFFFF0;
        if(colorName == 'WHITE') return 0xFFFFFF;
        return undefined;
    }
     
    //Sleep Event
    Sleep(second)
    {
        const d1 = new Date();
        while (true) 
        {
            const d2 = new Date();
            if (d2 - d1 > second) 
            {
                break;
            }
        }
    }
    
    //Calculate drop with have mmatched or not
    hitDrop(draggedDrop,arryDrop,DropSize)
    {
    	var thisDrop = draggedDrop;
    	let pointX = thisDrop.org_position_x - (DropSize * (4/5) );
    	let pointXDistance = thisDrop.org_position_x + (DropSize* (4/5) );
    	let pointY = thisDrop.org_position_y - (DropSize* (4/5));
    	let pointYDistance = thisDrop.org_position_y + (DropSize* (4/5));
    	let targetwidth = pointXDistance -pointX;
    	let targetheight = pointYDistance -pointY ;
      	var container = {x :pointX ,y : pointY,width :targetwidth ,height :targetheight };
      	var collisionX,collisionY,flgCollision = false;
        //Left
        if (thisDrop.x <= container.x) 
        {
       		flgCollision = true;
        }
        //Top
        if (thisDrop.y <= container.y) 
        {
       		flgCollision = true;
        }
        //Right
        if (thisDrop.x + thisDrop.width/2 >= container.width) 
        {
       		flgCollision = true;
        }
        //Bottom
        if (thisDrop.y + thisDrop.height/2 >= container.height) 
        {
       		flgCollision = true;
        }
        if(flgCollision == true)
        {
        	collisionX = thisDrop.x;
        	collisionY = thisDrop.y;
        	var returnDrop = Enumerable.from(arryDrop).where(xx=> ((xx.x - xx.width/2) <= collisionX && xx.x + xx.width/2 >= collisionX) &&  ((xx.y - xx.height/2) <= collisionY && (xx.y + xx.height/2) >= collisionY) && xx.Id != thisDrop.Id).firstOrDefault();
        	return returnDrop;
        }
    }
    
    //Get combo(Total)
    GetCombo(allDrops)
    {
        if(allDrops == undefined || allDrops.length == 0) 
        {
            var Ary = [];
            return Ary;
        }
        allDrops = Enumerable.from(allDrops).orderByDescending(xx=> xx.y).thenBy(xx=>xx.x).toArray();
        var listComboX = this.getHorizonCombo(allDrops);
        var listComboY = this.getVerticalCombo(allDrops);
        var listNearComboX = this.getNearComboX(listComboX);
        var listNearComboY = this.getNearComboY(listComboY);
        var comboList = this.getLinkCombo(listNearComboX,listNearComboY);
        var msg = this.formatByArr("Combo : [{0}]",comboList.length);
        console.log(msg);
        return comboList;
        
    }
    //getHorizonCombo
    getHorizonCombo(allDrops)
    {
        //Get All List Horizon
        var GetXList = Enumerable.from(allDrops).select(xx=>xx.y).distinct().orderByDescending().toArray();
        var List_x = [];
        for(var i = 0; i< GetXList.length;i++)
        {
            var xList = Enumerable.from(allDrops).where(xx=> xx.y == GetXList[i]).orderBy(xx=> xx.x).toArray();
            List_x.push(xList);
        }
        //SetCombo each XList
        var ListCombo_x = [];
        for(var i = 0 ;i<List_x.length;i++)
        { 
            var currentList = List_x[i];
            var GetXListParent = Enumerable.from(currentList).select(xx=> xx.parentGroup).distinct().toArray();
            for(var j = 0; j<GetXListParent.length;j++)
            {
                var currentParentGroup = GetXListParent[j];
                var cnt = Enumerable.from(currentList).count(xx=> xx.parentGroup == currentParentGroup);
                if(cnt < 3)
                {
                    continue;
                }
                var ListNOw = Enumerable.from(currentList).where(xx=> xx.parentGroup == currentParentGroup).toArray();
                var comboList = [];
                for(var k = 0; k<ListNOw.length;k++ )
                {
                    var thisDrop = ListNOw[k];
                    if(comboList.length < 1)
                    {
                        comboList.push(thisDrop);
                        continue;
                    }
                    if(thisDrop.x - comboList[comboList.length - 1].x >= DropSize + (DropSize/2))
                    {
                        if(comboList.length >= 3)
                        {
                            comboList.parentGroup = currentParentGroup;
                            ListCombo_x.push(comboList);
                            comboList = [];
                        }
                        else
                        {
                            comboList = [];
                        }
                        if(ListNOw.length - k < 3)break;
                        comboList.push(thisDrop);
                    }
                    else
                    {
                        comboList.push(thisDrop);
                    }
                    if(ListNOw.length - (k+1) == 0 && comboList.length >= 3)
                    {
                        comboList.parentGroup = currentParentGroup;
                        ListCombo_x.push(comboList);
                    }
                }
            }
        }
        return ListCombo_x;
    }
    //getVerticalCombo
    getVerticalCombo(allDrops)
    {
        //SetCombo each YList
        //Get all list Vertical
        var GetYList = Enumerable.from(allDrops).select(xx=>xx.x).distinct().orderBy().toArray();
        var List_y = [];
        for(var i = 0; i< GetYList.length;i++)
        {
            var yList = Enumerable.from(allDrops).where(xx=> xx.x == GetYList[i]).orderByDescending(xx=> xx.y).toArray();
            List_y.push(yList);
        }
        var ListCombo_y = [];
        for(var i = 0 ;i<List_y.length;i++)
        { 
            var currentList = List_y[i];
            var GetYListParent = Enumerable.from(currentList).select(xx=> xx.parentGroup).distinct().toArray();
            for(var j = 0; j<GetYListParent.length;j++)
            {
                var currentParentGroup = GetYListParent[j];
                var cnt = Enumerable.from(currentList).count(xx=> xx.parentGroup == currentParentGroup);
                if(cnt < 3)
                {
                    continue;
                }
                var ListNOw = Enumerable.from(currentList).where(xx=> xx.parentGroup == currentParentGroup).toArray();
                var comboList = [];
                for(var k = 0; k<ListNOw.length;k++ )
                {
                    var thisDrop = ListNOw[k];
                    if(comboList.length < 1)
                    {
                        comboList.push(thisDrop);
                        continue;
                    }
                    if(comboList[comboList.length - 1].y - thisDrop.y >= DropSize + (DropSize/2))
                    {
                        if(comboList.length >= 3)
                        {
                            comboList.parentGroup = currentParentGroup;
                            ListCombo_y.push(comboList);
                            comboList = [];
                        }
                        else
                        {
                            comboList = [];
                        }
                        if(ListNOw.length - k < 3)break;
                        comboList.push(thisDrop);
                    }
                    else
                    {
                        comboList.push(thisDrop);
                    }
                    if(ListNOw.length - (k+1) == 0 && comboList.length >= 3)
                    {
                        comboList.parentGroup = currentParentGroup;
                        ListCombo_y.push(comboList);
                    }
                }
            }
        }
        return ListCombo_y;
    }
        
    //Calculate drop with have matched or not(array Type)
    getMatching2Array(arry1,arry2)
    {
        var IRtn = undefined; 
        for(var i=0;i<arry2.length;i++)
        {
            var cnt = Enumerable.from(arry1).count(xx=> xx == arry2[i]);
            if(cnt > 0) 
            {
                IRtn = arry2[i];
                break;
            }
        }
        return IRtn;
    }
    
    //getNearComboX
    getNearComboX(arryX)
    {
        //GetNearCombo
        var allParent = Enumerable.from(arryX).select(xx=> xx.parentGroup).distinct().toArray();
        var listNearX = [];
        for(var i = 0; i < allParent.length;i++)
        {
            var combo = Enumerable.from(arryX).where(xx=> xx.parentGroup == allParent[i]).toArray();
            if(combo.length == 1)
            {
                combo[0].parentGroup = allParent[i];
                listNearX.push(combo[0]);
                continue;
            }
            var multiCombo = [];
            for(var j = 0; j<combo.length;j++)
            {
                var currentCombo = combo[j];
                if(multiCombo.length < 1)
                {
                    currentCombo.parentGroup = allParent[i];
                    multiCombo.push(currentCombo)
                }
                else
                {
                    for(var k=0; k<multiCombo.length;k++)
                    {
                        var listYPoint = Enumerable.from(multiCombo[k]).select(xx=> xx.y).orderBy().first();
                        var currentYpoint = Enumerable.from(currentCombo).select(xx=> xx.y).orderBy().first();
                        if(listYPoint ==currentYpoint)
                        {
                            currentCombo.parentGroup = allParent[i];
                            multiCombo.push(currentCombo);
                            break;
                        }
                        if( listYPoint - currentYpoint > 120 )
                        {
                            if(multiCombo.length == k + 1)
                            {
                                currentCombo.parentGroup = allParent[i];
                                multiCombo.push(currentCombo);
                                break;
                            }
                            else
                            {
                                continue;
                            }

                        }
                        var listCombo = Enumerable.from(multiCombo[k]).select(xx=> xx.x).toArray();
                        var current = Enumerable.from(currentCombo).select(xx=> xx.x).toArray();
                        var match = this.getMatching2Array(listCombo,current);
                        if(match != undefined)
                        {
                            var combineCombo = multiCombo[k].concat(currentCombo);
                            multiCombo = Enumerable.from(multiCombo).where(xx=> xx != multiCombo[k]).toArray();
                            multiCombo = Enumerable.from(multiCombo).where(xx=> xx != currentCombo).toArray();
                            combineCombo.parentGroup = allParent[i];
                            multiCombo.push(combineCombo);
                            break;
                        }
                        else
                        {
                            currentCombo.parentGroup = allParent[i];
                            multiCombo.push(currentCombo);
                        }
                    }   
                }
            }
            if(multiCombo.length > 0)
            {
                multiCombo = Enumerable.from(multiCombo).distinct().toArray();
                for(var xx= 0; xx< multiCombo.length;xx++)
                {
                    listNearX.push(multiCombo[xx]);
                }
            }
        }
        for(var i = 0; i< listNearX.length;i++)
        {
            listNearX[i].x = Enumerable.from(listNearX[i]).select(xx=> xx.x).orderBy().first();
            listNearX[i].y = Enumerable.from(listNearX[i]).select(xx=> xx.y).orderByDescending().first();
        }
        listNearX = Enumerable.from(listNearX).orderByDescending(xx=> xx.y).thenBy(xx=>xx.x).toArray();
        return listNearX;
    }
        
    //getNearComboY
    getNearComboY(arryY)
    {
        //GetNearCombo
        var allParent = Enumerable.from(arryY).select(xx=> xx.parentGroup).distinct().toArray();
        var listNearY = [];
        for(var i = 0; i < allParent.length;i++)
        {
            var combo = Enumerable.from(arryY).where(xx=> xx.parentGroup == allParent[i]).toArray();
            if(combo.length == 1)
            {
                combo[0].parentGroup = allParent[i];
                listNearY.push(combo[0]);
                continue;
            }
            var multiCombo = [];
            for(var j = 0; j<combo.length;j++)
            {
                var currentCombo = combo[j];
                if(multiCombo.length < 1)
                {
                    currentCombo.parentGroup = allParent[i];
                    multiCombo.push(currentCombo)
                }
                else
                {
                    for(var k=0; k<multiCombo.length;k++)
                    {
                        var listXpoint = Enumerable.from(multiCombo[k]).select(xx=> xx.x).orderByDescending().first();
                        var currentXpoint = Enumerable.from(currentCombo).select(xx=> xx.x).orderBy().first();
                        if(listXpoint ==currentXpoint)
                        {
                            currentCombo.parentGroup = allParent[i];
                            multiCombo.push(currentCombo);
                            break;
                        }
                        if( currentXpoint - listXpoint  > 120 )
                        {
                            if(multiCombo.length == k + 1)
                            {
                                currentCombo.parentGroup = allParent[i];
                                multiCombo.push(currentCombo);
                                break;
                            }
                            else
                            {
                                continue;
                            }

                        }
                        var listCombo = Enumerable.from(multiCombo[k]).select(xx=> xx.y).toArray();
                        var current = Enumerable.from(currentCombo).select(xx=> xx.y).toArray();
                        var match = this.getMatching2Array(listCombo,current);
                        if(match != undefined)
                        {
                            var combineCombo = multiCombo[k].concat(currentCombo);
                            multiCombo = Enumerable.from(multiCombo).where(xx=> xx != multiCombo[k]).toArray();
                            multiCombo = Enumerable.from(multiCombo).where(xx=> xx != currentCombo).toArray();
                            combineCombo.parentGroup = allParent[i];
                            multiCombo.push(combineCombo);
                            break;
                        }
                        else
                        {
                            currentCombo.parentGroup = allParent[i];
                            multiCombo.push(currentCombo);
                        }
                    }   
                }
            }
            if(multiCombo.length > 0)
            {
                multiCombo = Enumerable.from(multiCombo).distinct().toArray();
                for(var xx= 0; xx< multiCombo.length;xx++)
                {
                    listNearY.push(multiCombo[xx]);
                }
            }
        }
        for(var i = 0; i< listNearY.length;i++)
        {
            listNearY[i].x = Enumerable.from(listNearY[i]).select(xx=> xx.x).orderBy().first();
            listNearY[i].y = Enumerable.from(listNearY[i]).select(xx=> xx.y).orderByDescending().first();
        }
        listNearY = Enumerable.from(listNearY).orderByDescending(xx=> xx.y).thenBy(xx=>xx.x).toArray();
        return listNearY;
    }
    
    //getLinkCombo
    getLinkCombo(arryX,arryY)
    {
        for(var ii = 0; ii < mapY; ii ++)
        {
	        //Get Link Combo
	        var ListJoinXYCombo = arryX.concat(arryY);
	        for(var i = 0; i< ListJoinXYCombo.length;i++)
	        {
	            ListJoinXYCombo[i].x = Enumerable.from(ListJoinXYCombo[i]).select(xx=> xx.x).orderBy().first();
	            ListJoinXYCombo[i].y = Enumerable.from(ListJoinXYCombo[i]).select(xx=> xx.y).orderByDescending().first();
	        }
	        ListJoinXYCombo = Enumerable.from(ListJoinXYCombo).orderByDescending(xx=> xx.y).thenBy(xx=>xx.x).toArray();
	        var allParent = Enumerable.from(ListJoinXYCombo).select(xx=> xx.parentGroup).distinct().toArray();
	        var comboList = [];
	        for(var i = 0; i < allParent.length;i++)
	        {
	            var currentList = Enumerable.from(ListJoinXYCombo).where(xx=> xx.parentGroup == allParent[i]).toArray();
	            var multiCombo = [];
	            for(var j=0;j < currentList.length;j++)
	            {
	                var currentCombo = currentList[j];
	                if(multiCombo.length == 0)
	                {
	                    currentCombo.parentGroup = allParent[i];
	                    multiCombo.push(currentCombo)
	                }
	                else
	                {
	                    for(var k = 0; k<multiCombo.length;k++ )
	                    {
	                        var ListId = Enumerable.from(multiCombo[k]).select(xx=> xx.Id).distinct().toArray();
	                        var currentId= Enumerable.from(currentCombo).select(xx=> xx.Id).distinct().toArray();
	                        var ret = this.getMatching2Array(ListId,currentId);
	                        if(ret != undefined)
	                        {
	                            var combineCombo = multiCombo[k].concat(currentCombo);
	                            multiCombo = Enumerable.from(multiCombo).where(xx=> xx != multiCombo[k]).toArray();
	                            multiCombo = Enumerable.from(multiCombo).where(xx=> xx != currentCombo).toArray();
	                            combineCombo.parentGroup = allParent[i];
	                            multiCombo.push(combineCombo);
	                            break;
	                        }
	                        else
	                        {
	                            currentCombo.parentGroup = allParent[i];
	                            multiCombo.push(currentCombo);
	                            break;
	                        }
	                    }
	                }
	            }
	            if(multiCombo.length > 0)
	            {
	                multiCombo = Enumerable.from(multiCombo).distinct().toArray();
	                for(var xx= 0; xx< multiCombo.length;xx++)
	                {
	                    comboList.push(multiCombo[xx]);
	                }
	            }
	        }
	        
	        var allParent = Enumerable.from(comboList).select(xx=> xx.parentGroup).distinct().toArray(); 
	        for(var z = 0; z < mapY;z++)
	        {
	            for(var i = 0; i < allParent.length;i++)
	            {
	                var currentList = Enumerable.from(comboList).where(xx=> xx.parentGroup == allParent[i]).toArray();
	                var loop = currentList.length;
	                for(var j=0;j <loop ;j++)
	                {
	                    var next = j + 1;
	                    if(next == loop)
	                    {
	                        next = j;
	                    }
	                    var ListId = Enumerable.from(currentList[j]).select(xx=> xx.Id).distinct().toArray();
	                    var currentId= Enumerable.from(currentList[next]).select(xx=> xx.Id).distinct().toArray();
	                    var ret = this.getMatching2Array(ListId,currentId);
	                    if(ret != undefined && next!= j)
	                    {
	                        var combineCombo = currentList[j].concat(currentList[next]);
	                        comboList = Enumerable.from(comboList).where(xx=> xx != currentList[j]).toArray();
	                        comboList = Enumerable.from(comboList).where(xx=> xx != currentList[next]).toArray();
	                        combineCombo.parentGroup = allParent[i];
	                        comboList.push(combineCombo);
	                        break;
	                    }
	            }
	        }
        }
        for(var i = 0; i< comboList.length;i++)
        {
            comboList[i].x = Enumerable.from(comboList[i]).select(xx=> xx.x).orderBy().first();
            comboList[i].y = Enumerable.from(comboList[i]).select(xx=> xx.y).orderByDescending().first();
        }	
        //comboList = Enumerable.from(comboList).orderByDescending(xx=> xx.y).thenBy(xx=>xx.x).toArray();
        comboList = Enumerable.from(comboList).orderByDescending(xx=> xx.Id).toArray();
        return comboList;
        }
    }
    
    //ResetPosition
    ResetPosition(arry)
    {
		if(Enumerable.from(arry).count(xx=>xx.moveTarget != undefined) > 0)
		{
			return ;
		}
        var objList = arry;
        var listX = Enumerable.from(arry).select(xx=>xx.x).distinct().orderBy().toArray();
        for(var i =0;i< listX.length; i++)
        {
            var list = Enumerable.from(arry).where(xx=>xx.x == listX[i]).toArray();
            list = Enumerable.from(list).orderByDescending(xx=>xx.y).toArray();
            if(list.length == mapY) continue;
            for(var k = 0; k < list.length;k++)
            {
                for(var j =0;j<mapY;j++)
                {
                    var pointY = (((mapY-1) - j) * DropSize) + (DropSize/2);
                    
                    var minHeight = Enumerable.from(list).select(xx => xx.y).distinct().orderBy().first(); 
                    var minHeight_2 = 999;
                    if(Enumerable.from(list).count(xx => xx.moveTarget != undefined)> 0)
                    {
                        minHeight_2 = Enumerable.from(list).where(xx => xx.moveTarget != undefined).select(xx => xx.moveTarget).orderBy().first();
                    }
                    minHeight = (minHeight > minHeight_2)? minHeight_2:minHeight;
                    
                    if(minHeight > pointY) break;
                    if(list[k].y == pointY) break;
                    
                    if(Enumerable.from(list).count(xx => xx.y == pointY && xx.moveTarget == undefined ) > 0) continue;
                    if(Enumerable.from(list).count(xx => xx.moveTarget == pointY) > 0) continue;
                    
                    if(list[k].moveTarget == pointY) break;
                    
                    list[k].moveTarget = pointY;
                    break;
                }
            }
        }
        arry = Enumerable.from(arry).select(xx=>xx.x).distinct().orderByDescending().toArray();
        
    }
    
    // フォーマット（引数可変（配列）版）
	formatByArr(msg) {
    var args = [];
    for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
    }
    return msg.replace(/\{(\d+)\}/g, function (m, k) {
        return args[k];
    });
};
}