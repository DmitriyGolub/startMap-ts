import {starsArray} from "../const/stars-count";

export const rebuildShader = (shader: string, galaxyNumber: string) =>{
    let galaxyVertexShaderContent = shader;
    galaxyVertexShaderContent = galaxyVertexShaderContent.replace('GALAXY_ACTIVE_STARS_COUNT', <string>starsArray[galaxyNumber].active);
    galaxyVertexShaderContent = galaxyVertexShaderContent.replace('GALAXY_ACTIVE_STARS_COUNT', <string>starsArray[galaxyNumber].active);
    galaxyVertexShaderContent = galaxyVertexShaderContent.replace('GALAXY_STARS_WITH_CUSTOM_COLOR_COUNT', <string>starsArray[galaxyNumber].customColor);
    galaxyVertexShaderContent = galaxyVertexShaderContent.replace('GALAXY_STARS_WITH_CUSTOM_COLOR_COUNT', <string>starsArray[galaxyNumber].customColor);
    console.log(<string>starsArray[galaxyNumber].customColor)
    return galaxyVertexShaderContent
}