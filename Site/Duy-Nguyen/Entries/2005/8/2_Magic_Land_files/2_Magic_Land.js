// Created by iWeb 3.0.4 local-build-20140620

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="300" height="241" style="height: 241px; position: relative; width: 300px; " class="inline-block"><param name="src" value="../../../../Media/MagicLand%28web%29-1.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="300" height="241" style="height: 241px; position: relative; width: 300px; " class="inline-block"><param name="src" value="2_Magic_Land_files/MagicLand%28web%29.jpg"/><param name="target" value="myself"/><param name="href" value="../../../../../Media/MagicLand%28web%29-1.mov"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="300" height="241" data="../../../../Media/MagicLand%28web%29-1.mov" style="height: 241px; position: relative; width: 300px; " class="inline-block"><param name="src" value="../../../../Media/MagicLand%28web%29-1.mov"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('../../../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{dynamicallyPopulate();loadMozillaCSS('2_Magic_Land_files/2_Magic_LandMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');Widget.onload();fixAllIEPNGs('../../../../Media/transparent.gif');fixupIECSS3Opacity('id5');BlogFixupPreviousNext();performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
