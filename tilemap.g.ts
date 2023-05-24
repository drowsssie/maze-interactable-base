// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000707070707070707070707070707070704060606060606060606060606060606040606060606060606060606060606050406060606060606060606060606060504060606060606060606060606060605040606060a0d0d11110d0d0806060605040606060e1006060606060f06060605040606060e0606060606060f06060605040606060e0606060606060f0606060504060606090c0c0c0c0c0c0b0606060504060606060606060606060606060605040a1111080606060606060606060605040e06060f0606060606060606060605040e06060f060606060606060606060504090c0c0b060606060606060606060501030303030303030303030303030302`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . 2 2 2 . . 2 2 2 . . . 2 
2 . . . 2 . . . . . . 2 . . . 2 
2 . . . 2 . . . . . . 2 . . . 2 
2 . . . 2 . . . . . . 2 . . . 2 
2 . . . 2 2 2 2 2 2 2 2 . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 . . 2 . . . . . . . . . . 2 
2 2 . . 2 . . . . . . . . . . 2 
2 2 2 . 2 . . . . . . . . . . 2 
2 2 2 2 2 . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundCenter,sprites.dungeon.doorClosedNorth,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.chestClosed,sprites.dungeon.stairSouth], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
