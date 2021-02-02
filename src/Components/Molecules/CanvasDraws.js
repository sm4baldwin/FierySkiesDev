export const CanvasCornerBubbles = (ctx, framecount) => {
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(0, 0, 10*Math.sin(framecount*0.05)**.5, 0, 2*Math.PI)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(ctx.canvas.width, 0, 10*Math.sin(framecount*0.05)**.5, 0, 2*Math.PI)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(ctx.canvas.width, ctx.canvas.height, 10*Math.sin(framecount*0.05)**.5, 0, 2*Math.PI)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(0, ctx.canvas.height, 10*Math.sin(framecount*0.05)**.5, 0, 2*Math.PI)
    ctx.fill()
}

export const CanvasConstRectangle = (ctx) => {
    ctx.fillStyle = 'red'
    ctx.beginPath()
    ctx.fillRect(ctx.canvas.width/2 - 100, ctx.canvas.height/2 - 100, 200, 200)
}

export const CanvasCornerCircle = (ctx, framecount) => {
    ctx.fillStyle = 'blue'
    ctx.beginPath()
    ctx.arc(0, 0, 10*Math.sin(((framecount + 15)%100)*0.05)**.5, 0, 2*Math.PI)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(ctx.canvas.width, 0, 10*Math.sin(((framecount + 15)%100)*0.05)**.5, 0, 2*Math.PI)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(ctx.canvas.width, ctx.canvas.height, 10*Math.sin(((framecount + 15)%100)*0.05)**.5, 0, 2*Math.PI)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(0, ctx.canvas.height, 10*Math.sin(((framecount + 15)%100)*0.05)**.5, 0, 2*Math.PI)
    ctx.fill()
}

export const CharacterWizard = (ctx, framecount, img, loc) => {
    let spriteVers
    switch(framecount) {
        case (framecount * 20 < 250): 
            spriteVers = 0
            break
        case (framecount * 20 < 500): 
            spriteVers = 1
            break
        case (framecount * 20 < 750): 
            spriteVers = 2
            break
        case (framecount * 20 < 1000): 
            spriteVers = 3
            break
        case (framecount * 20 < 1250): 
            spriteVers = 4
            break
        case (framecount * 20 < 1500): 
            spriteVers = 5
            break
        case (framecount * 20 < 1750): 
            spriteVers = 6
            break
        default: 
            spriteVers = 7
    }
    ctx.drawImage(img, 250 * spriteVers + 25, 25, 150, 150, loc[0], loc[1], 150, 150)
}