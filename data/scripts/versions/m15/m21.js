if (!loadedVersions.includes('m15M21Showcase')) {
	loadedVersions.push("m15M21Showcase")
	loadFrameImages([
		['White M21 Showcase Frame', 'data/images/m15/m21/m15M21FrameW.png', 0, 0, 1, 1, ['Full']],
		['Blue M21 Showcase Frame', 'data/images/m15/m21/m15M21FrameU.png', 0, 0, 1, 1, ['Full']],
		['Black M21 Showcase Frame', 'data/images/m15/m21/m15M21FrameB.png', 0, 0, 1, 1, ['Full']],
		['Red M21 Showcase Frame', 'data/images/m15/m21/m15M21FrameR.png', 0, 0, 1, 1, ['Full']],
		['Green M21 Showcase Frame', 'data/images/m15/m21/m15M21FrameG.png', 0, 0, 1, 1, ['Full']],
		['White Land M21 Showcase Frame', 'data/images/m15/m21/m15M21FrameWL.png', 0, 0, 1, 1, ['Full']],
		['Blue Land M21 Showcase Frame', 'data/images/m15/m21/m15M21FrameUL.png', 0, 0, 1, 1, ['Full']],
		['Black Land M21 Showcase Frame', 'data/images/m15/m21/m15M21FrameBL.png', 0, 0, 1, 1, ['Full']],
		['Red Land M21 Showcase Frame', 'data/images/m15/m21/m15M21FrameRL.png', 0, 0, 1, 1, ['Full']],
		['Green Land M21 Showcase Frame', 'data/images/m15/m21/m15M21FrameGL.png', 0, 0, 1, 1, ['Full']],
		['White Power/Toughness', 'data/images/m15/m21/m15M21PTW.png', 1136/1500, 1858/2100, 282/1500, 154/2100, ['Full']],
		['Blue Power/Toughness', 'data/images/m15/m21/m15M21PTU.png', 1136/1500, 1858/2100, 282/1500, 154/2100, ['Full']],
		['Black Power/Toughness', 'data/images/m15/m21/m15M21PTB.png', 1136/1500, 1858/2100, 282/1500, 154/2100, ['Full']],
		['Red Power/Toughness', 'data/images/m15/m21/m15M21PTR.png', 1136/1500, 1858/2100, 282/1500, 154/2100, ['Full']],
		['Green Power/Toughness', 'data/images/m15/m21/m15M21PTG.png', 1136/1500, 1858/2100, 282/1500, 154/2100, ['Full']],
		['Holo Stamp', 'data/images/m15/m21/m15M21Stamp.png', 709/1500, 1873/2100, 82/1500, 82/2100, ['Full']]
	], 'frameClassM15M21Showcase')
}

if (currentVersion != 'm15M21Showcase') {
	currentVersion = 'm15M21Showcase'
	
	loadTextOptions([
	new cardText('Card Title', '', 126/1500, 188/2100, 1248/1500, 80/2100, 'belerenb', 80/2100, 'white', ['oneLine=true']),
	new cardText('Card Type', '', 126/1500, 1264/2100, 1248/1500, 68/2100, 'belerenb', 68/2100, 'white', ['oneLine=true']),
	new cardText('Rules Text', '', 145/1500, 1370/2100, 1210/1500, 625/2100, 'mplantin', 74/2100, 'black'),
	new cardText('Power/Toughness', '', 1191/1500, 1954/2100, 205/1500, 78/2100, 'belerenbsc', 78/2100, 'white', ['oneLine=true,textAlign="center"'])
	])
}

hideFrameImages('frameClassM15M21Showcase')