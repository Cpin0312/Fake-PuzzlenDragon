class commonMethod
{
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
    
    GetColor(colorName)
    {
        if(colorName == 'Black') return 0x000000;
        if(colorName == 'Navy') return 0x000080;
        if(colorName == 'DarkBlue') return 0x00008B;
        if(colorName == 'MediumBlue') return 0x0000CD;
        if(colorName == 'Blue') return 0x0000FF;
        if(colorName == 'DarkGreen') return 0x006400;
        if(colorName == 'Green') return 0x008000;
        if(colorName == 'Teal') return 0x008080;
        if(colorName == 'DarkCyan') return 0x008B8B;
        if(colorName == 'DeepSkyBlue') return 0x00BFFF;
        if(colorName == 'DarkTurquoise') return 0x00CED1;
        if(colorName == 'MediumSpringGreen') return 0x00FA9A;
        if(colorName == 'Lime') return 0x00FF00;
        if(colorName == 'SpringGreen') return 0x00FF7F;
        if(colorName == 'Aqua') return 0x00FFFF;
        if(colorName == 'Cyan') return 0x00FFFF;
        if(colorName == 'MidnightBlue') return 0x191970;
        if(colorName == 'DodgerBlue') return 0x1E90FF;
        if(colorName == 'LightSeaGreen') return 0x20B2AA;
        if(colorName == 'ForestGreen') return 0x228B22;
        if(colorName == 'SeaGreen') return 0x2E8B57;
        if(colorName == 'DarkSlateGray') return 0x2F4F4F;
        if(colorName == 'DarkSlateGrey') return 0x2F4F4F;
        if(colorName == 'LimeGreen') return 0x32CD32;
        if(colorName == 'MediumSeaGreen') return 0x3CB371;
        if(colorName == 'Turquoise') return 0x40E0D0;
        if(colorName == 'RoyalBlue') return 0x4169E1;
        if(colorName == 'SteelBlue') return 0x4682B4;
        if(colorName == 'DarkSlateBlue') return 0x483D8B;
        if(colorName == 'MediumTurquoise') return 0x48D1CC;
        if(colorName == 'Indigo') return 0x4B0082;
        if(colorName == 'DarkOliveGreen') return 0x556B2F;
        if(colorName == 'CadetBlue') return 0x5F9EA0;
        if(colorName == 'CornflowerBlue') return 0x6495ED;
        if(colorName == 'RebeccaPurple') return 0x663399;
        if(colorName == 'MediumAquaMarine') return 0x66CDAA;
        if(colorName == 'DimGray') return 0x696969;
        if(colorName == 'DimGrey') return 0x696969;
        if(colorName == 'SlateBlue') return 0x6A5ACD;
        if(colorName == 'OliveDrab') return 0x6B8E23;
        if(colorName == 'SlateGray') return 0x708090;
        if(colorName == 'SlateGrey') return 0x708090;
        if(colorName == 'LightSlateGray') return 0x778899;
        if(colorName == 'LightSlateGrey') return 0x778899;
        if(colorName == 'MediumSlateBlue') return 0x7B68EE;
        if(colorName == 'LawnGreen') return 0x7CFC00;
        if(colorName == 'Chartreuse') return 0x7FFF00;
        if(colorName == 'Aquamarine') return 0x7FFFD4;
        if(colorName == 'Maroon') return 0x800000;
        if(colorName == 'Purple') return 0x800080;
        if(colorName == 'Olive') return 0x808000;
        if(colorName == 'Gray') return 0x808080;
        if(colorName == 'Grey') return 0x808080;
        if(colorName == 'SkyBlue') return 0x87CEEB;
        if(colorName == 'LightSkyBlue') return 0x87CEFA;
        if(colorName == 'BlueViolet') return 0x8A2BE2;
        if(colorName == 'DarkRed') return 0x8B0000;
        if(colorName == 'DarkMagenta') return 0x8B008B;
        if(colorName == 'SaddleBrown') return 0x8B4513;
        if(colorName == 'DarkSeaGreen') return 0x8FBC8F;
        if(colorName == 'LightGreen') return 0x90EE90;
        if(colorName == 'MediumPurple') return 0x9370DB;
        if(colorName == 'DarkViolet') return 0x9400D3;
        if(colorName == 'PaleGreen') return 0x98FB98;
        if(colorName == 'DarkOrchid') return 0x9932CC;
        if(colorName == 'YellowGreen') return 0x9ACD32;
        if(colorName == 'Sienna') return 0xA0522D;
        if(colorName == 'Brown') return 0xA52A2A;
        if(colorName == 'DarkGray') return 0xA9A9A9;
        if(colorName == 'DarkGrey') return 0xA9A9A9;
        if(colorName == 'LightBlue') return 0xADD8E6;
        if(colorName == 'GreenYellow') return 0xADFF2F;
        if(colorName == 'PaleTurquoise') return 0xAFEEEE;
        if(colorName == 'LightSteelBlue') return 0xB0C4DE;
        if(colorName == 'PowderBlue') return 0xB0E0E6;
        if(colorName == 'FireBrick') return 0xB22222;
        if(colorName == 'DarkGoldenRod') return 0xB8860B;
        if(colorName == 'MediumOrchid') return 0xBA55D3;
        if(colorName == 'RosyBrown') return 0xBC8F8F;
        if(colorName == 'DarkKhaki') return 0xBDB76B;
        if(colorName == 'Silver') return 0xC0C0C0;
        if(colorName == 'MediumVioletRed') return 0xC71585;
        if(colorName == 'IndianRed') return 0xCD5C5C;
        if(colorName == 'Peru') return 0xCD853F;
        if(colorName == 'Chocolate') return 0xD2691E;
        if(colorName == 'Tan') return 0xD2B48C;
        if(colorName == 'LightGray') return 0xD3D3D3;
        if(colorName == 'LightGrey') return 0xD3D3D3;
        if(colorName == 'Thistle') return 0xD8BFD8;
        if(colorName == 'Orchid') return 0xDA70D6;
        if(colorName == 'GoldenRod') return 0xDAA520;
        if(colorName == 'PaleVioletRed') return 0xDB7093;
        if(colorName == 'Crimson') return 0xDC143C;
        if(colorName == 'Gainsboro') return 0xDCDCDC;
        if(colorName == 'Plum') return 0xDDA0DD;
        if(colorName == 'BurlyWood') return 0xDEB887;
        if(colorName == 'LightCyan') return 0xE0FFFF;
        if(colorName == 'Lavender') return 0xE6E6FA;
        if(colorName == 'DarkSalmon') return 0xE9967A;
        if(colorName == 'Violet') return 0xEE82EE;
        if(colorName == 'PaleGoldenRod') return 0xEEE8AA;
        if(colorName == 'LightCoral') return 0xF08080;
        if(colorName == 'Khaki') return 0xF0E68C;
        if(colorName == 'AliceBlue') return 0xF0F8FF;
        if(colorName == 'HoneyDew') return 0xF0FFF0;
        if(colorName == 'Azure') return 0xF0FFFF;
        if(colorName == 'SandyBrown') return 0xF4A460;
        if(colorName == 'Wheat') return 0xF5DEB3;
        if(colorName == 'Beige') return 0xF5F5DC;
        if(colorName == 'WhiteSmoke') return 0xF5F5F5;
        if(colorName == 'MintCream') return 0xF5FFFA;
        if(colorName == 'GhostWhite') return 0xF8F8FF;
        if(colorName == 'Salmon') return 0xFA8072;
        if(colorName == 'AntiqueWhite') return 0xFAEBD7;
        if(colorName == 'Linen') return 0xFAF0E6;
        if(colorName == 'LightGoldenRodYellow') return 0xFAFAD2;
        if(colorName == 'OldLace') return 0xFDF5E6;
        if(colorName == 'Red') return 0xFF0000;
        if(colorName == 'Fuchsia') return 0xFF00FF;
        if(colorName == 'Magenta') return 0xFF00FF;
        if(colorName == 'DeepPink') return 0xFF1493;
        if(colorName == 'OrangeRed') return 0xFF4500;
        if(colorName == 'Tomato') return 0xFF6347;
        if(colorName == 'HotPink') return 0xFF69B4;
        if(colorName == 'Coral') return 0xFF7F50;
        if(colorName == 'DarkOrange') return 0xFF8C00;
        if(colorName == 'LightSalmon') return 0xFFA07A;
        if(colorName == 'Orange') return 0xFFA500;
        if(colorName == 'LightPink') return 0xFFB6C1;
        if(colorName == 'Pink') return 0xFFC0CB;
        if(colorName == 'Gold') return 0xFFD700;
        if(colorName == 'PeachPuff') return 0xFFDAB9;
        if(colorName == 'NavajoWhite') return 0xFFDEAD;
        if(colorName == 'Moccasin') return 0xFFE4B5;
        if(colorName == 'Bisque') return 0xFFE4C4;
        if(colorName == 'MistyRose') return 0xFFE4E1;
        if(colorName == 'P1_BlanchedAlmond') return 0xFFEBCD;
        if(colorName == 'P1_PapayaWhip') return 0xFFEFD5;
        if(colorName == 'LavenderBlush') return 0xFFF0F5;
        if(colorName == 'SeaShell') return 0xFFF5EE;
        if(colorName == 'Cornsilk') return 0xFFF8DC;
        if(colorName == 'LemonChiffon') return 0xFFFACD;
        if(colorName == 'FloralWhite') return 0xFFFAF0;
        if(colorName == 'Snow') return 0xFFFAFA;
        if(colorName == 'Yellow') return 0xFFFF00;
        if(colorName == 'LightYellow') return 0xFFFFE0;
        if(colorName == 'Ivory') return 0xFFFFF0;
        if(colorName == 'White') return 0xFFFFFF;
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
}