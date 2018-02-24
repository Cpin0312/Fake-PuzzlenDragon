# Fake-PuzzlenDragon

Hey,Nice to meet your.
I am just a beginner of Js,and also to fan for Puzzle and Dragons(※PAD).I try my best to write to 
good grammer, if your feel some grammer wrong, please let me know.

I have make a game look like PAD,and both of assets what i used is not my original, if you think that have something wrong, 
i would use other to replace that.

# Reference
When i study Js,Those of website is usefully and really help to to solved most of problem
1.kittykatattack/learningPixi(KittyKatatack, Thanks!!!!) https://github.com/kittykatattack/learningPixi.                      
2.createJs(Main for SoundJs, And i still studing TweenJs....)https://createjs.com/                                                                  
3.PIXI sample(Best Website for Beginner i think)http://pixijs.io/examples/#/basics/basic.js                                           
4.JavaScript Linq(this help to able to remove drop)https://github.com/mihaifm/linq/                                                                  

OK, i would start to explain my game.                                                                                        
this is my workFolder                                                                                                              
C:.                                                                                                                                    
├─index.html                                                                                                                                    
├─readme.txt                                                                                                                                    
├─lib                                                                                                                                    
└─src                                                                                                                                    
    ├─images                                                                                                                                    
    └─sounds                                                                                                                                    
                                                                                                                                        
↓↓↓Both of that is library I have used,this all is able download from website i show above either here. 											      
<script src = 'lib/commonMethod.js'></script>																																									                                                                                           
<script src = 'lib/commonPIXI.js'></script>                                                                                                                          
<script src = 'lib/linq.js'></script>                                                                                                                          
<script src = 'lib/pixi.min.js'></script>                                                                                                                          
<script src = 'lib/pixi-layers.js'></script>                                                                                           
<script src = 'lib/soundjs-0.6.2.min.js'></script>                                                                                           
<script src = 'lib/tweenjs.min.js'></script>                                                                                           

About                                                                                                                                                                                       
'What is PIXI'                                                                                                                                
'How to use PIXI'                                                                                                                                
'How to use Json File'                                                                                                                                
'How to play sound'                                                                                                                                
Sorry for my Explanatory Power,someone who dont know to use what i write above, pls refer to website i have shoe on Top.                                                                                                                                
(Because i am also learning from those website!)                                                                                                                                

# Game Explaination
▽BackGround Path                                                                                                                                
1. TOP half side is just download picture i like from google and place it only.
2. DropPage is using Tiling Sprite method to made a mini size image to cover area i want.

▼Drops Control
1.
function setup()
    {
        //...↑↑↑Many Sprite Setting 
        //Game Scene Setting
        //BackGroup(Tiling)
        //Original Dropsize is 97pixie, to make a sure tha page is able to look all with scollbar, i have to set to 80pixie
        background = new PIXI.Texture(puzzleBackDround_Id['backGround.png']);
        tileBackGround = new PIXI.extras.TilingSprite(background,DropSize*mapX,DropSize*mapY);
        //Dropsize was changed and tileScale is also same
        tileBackGround.tileScale.x *= 0.83;
        tileBackGround.tileScale.y *= 0.83;
        containAll.addChild(tileBackGround);
        app.stage.group.enableSort = true;
        //Drops
        //i have used TexturePacker to build Json file with what sprite i need ,
        //if someone need to know the method please refer to (kittykatattack/learningPixi)
        puzzleDrops_Id = PIXI.loader.resources['src/images/PuzzleDragons.json'].textures;
        dropFire = puzzleDrops_Id['fire.png'];
        dropFire.IdGroup = 1;
        dropEarth = puzzleDrops_Id['earth.png'];
        dropEarth.IdGroup = 2;
        dropWater = puzzleDrops_Id['water.png'];
        dropWater.IdGroup = 3;
        dropLight = puzzleDrops_Id['light.png'];
        dropLight.IdGroup = 4;
        dropDark = puzzleDrops_Id['dark.png'];
        dropDark.IdGroup = 5;
        
        //First Time setting with no matching Page
        //When start the game , i should not to let player have a bonus combo without move!!
        //And also, if your have not make more that 9 combos, you are not able to defeat Boss!!
        //To make a game been playAble, i will make a first page which able to do 10 combos!! 
        var flg = true;
        //if that is not a 10 combos able page, i will reload again all drops, so this to loop infinite
        while(flg == true)
        {
            //Set DropPage
            SetDrop();
            //First Page would been 10combos able page
            getParentList = Enumerable.from(allDrops).select(xx=> xx.parentGroup).distinct().toArray();
            for(var i = 0; i < getParentList.length; i++)
            {
                getElementList = Enumerable.from(allDrops).where(xx=> xx.parentGroup == getParentList[i]).toArray();
                if(getElementList.length % 3 != 0)
                {
                    containRect.removeChildren();
                    allDrops = [];
                    break;
                }
            }
            //reset
            if(allDrops.length == 0) continue;
            //Get Remove Able Combo
            allCombo = GetCombo();
            if(allCombo.length == 0)
            {
                //stop infinity Loop
                flg = false;
            }
            else
            {
                //reset
                containRect.removeChildren();
                allDrops = [];
            }
        }
       //Ya, this method will loop by requestAnimationFrame
       gameLoop();
    }

▽Drop Setting
function SetDrop()
    {
        var ret = false;
        for(var i = 0;i<totalDrops;i++)
        {
            //Set Position
            //Drop will set from left to right
            var position_x = ((i%mapX) * DropSize) + (DropSize/2);
            //and Also set from top to bottom
            var position_y = ((Math.floor(i/mapX)) * DropSize) + (DropSize/2);
            //get Random element
            var randomCnt = comm.GetRandomInt(1,5);
            var Drop;
            
            // Reset Id if drop exist
            if(allDrops.length > 0)
            {
                if(Enumerable.from(allDrops).count(xx=> xx.x ==position_x && xx.y == position_y ) > 0)
                {
                    var temp = Enumerable.from(allDrops).where(xx=> xx.x ==position_x && xx.y == position_y ).first();
                    temp.Id = i;
                    continue;
                }
            }
            // Set parentgroup
            if(randomCnt == dropFire.IdGroup)
            {
                Drop = new PIXI.Sprite(dropFire);
                Drop.parentGroup = groupFire;
            }
            // Set parentgroup
            else if(randomCnt == dropEarth.IdGroup)
            {
                Drop = new PIXI.Sprite(dropEarth);
                Drop.parentGroup = groupEarth;
            }
            // Set parentgroup
            else if(randomCnt == dropWater.IdGroup)
            {
                Drop = new PIXI.Sprite(dropWater);
                Drop.parentGroup = groupWater;
            }
            // Set parentgroup
            else if(randomCnt == dropLight.IdGroup)
            {
                Drop = new PIXI.Sprite(dropLight);
                Drop.parentGroup = groupLight;
            }
            // Set parentgroup
            else if(randomCnt == dropDark.IdGroup)
            {
                Drop = new PIXI.Sprite(dropDark);
                Drop.parentGroup = groupDark;
            }
            // Set parentgroup
            //Only first time (tranparent)
            if(flgStartUp == true) Drop.alpha = 0;
            //Add showable drop on page
            containRect.addChild(Drop);
            //Active after keyUp which have matched
            if(flgMoveUptoDown == true)
            {
                //MoveDown from top if drop have removed
                Drop.startY = position_y
                Drop.position.set(position_x,(DropSize/2) + position_y -  (mapY * DropSize));
            }
            else
            {
                //start up Only
                Drop.position.set(position_x,position_y);
            }
            //center point
            Drop.anchor.set(0.5);
            Drop.width = DropSize;
            Drop.height = DropSize;
            Drop.Id = i;
            //Set button event to each spirite
            subscribe(Drop);
            allDrops.push(Drop);
            ret = true;
        }
        return ret;

    }

Testing












