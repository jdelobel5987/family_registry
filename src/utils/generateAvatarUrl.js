import getRandom from "./getRandom";

function generateAvatarUrl() {
  const randomAvatar = {
    avatarStyle: ['Circle'],
    topType: ['NoHair', 'Eyepatch', 'Hat', 'Hijab', 'LongHairBigHair', 'LongHairBob', 'LongHairBun', 'LongHairCurly', 'LongHairDreads', 'LongHairFrida', 'LongHairFroBand', 'LongHairFro', 'LongHairNotTooLong', 'LongHairStraight02', 'LongHairStraight01', 'ShortHairDreads01', 'ShortHairDreads02', 'ShortHairFrizzle', 'ShortHairShaggyMullet', 'ShortHairShortCurly', 'ShortHairShortFlat', 'ShortHairShortRound', 'ShortHairShortWaved'],
    accessoriesType: ['Blank', 'Prescription02', 'Round', 'Sunglasses', 'Wayfarers'],
    hairColor: ['Auburn', 'Black', 'Blonde', 'BlondeGolden', 'Brown', 'BrownDark', 'PastelPink', 'Blue','Platinum', 'Red', 'SilverGray'],
    facialHairType: ['Blank', 'BeardMedium', 'BeardLight', 'MoustacheFancy', 'MoustacheMagnum'],
    clotheType: ['BlazerShirt', 'BlazerSweater', 'CollarSweater', 'GraphicShirt', 'Hoodie', 'Overall', 'ShirtCrewNeck', 'ShirtScoopNeck', 'ShirtVNeck'],
    clotheColor: ['Black', 'Blue01', 'Blue02', 'Blue03', 'Gray01', 'Gray02', 'Heather', 'PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow', 'Pink', 'Red', 'White'],
    eyeType: ['Default','Close','Cry','Dizzy','EyeRoll','Happy','Hearts','Side','Squint','Surprised','Wink','WinkWacky'],
    eyebrowType: ['Default','Angry','AngryNatural','DefaultNatural','FlatNatural','RaisedExcited','RaisedExcitedNatural','SadConcerned','SadConcernedNatural','UnibrowNatural'],
    mouthType: ['Default','Concerned','Disbelief','Eating','Grimace','Sad','ScreamOpen','Serious','Smile','Tongue','Twinkle','Vomit'],
    skinColor: ['Light', 'Brown', 'Black', 'Yellow', 'Pale', 'DarkBrown', 'Tanned'],
  };

  return `https://avataaars.io/?avatarStyle=${getRandom(randomAvatar.avatarStyle)}&topType=${getRandom(randomAvatar.topType)}&accessoriesType=${getRandom(randomAvatar.accessoriesType)}&hairColor=${getRandom(randomAvatar.hairColor)}&facialHairType=${getRandom(randomAvatar.facialHairType)}&clotheType=${getRandom(randomAvatar.clotheType)}&eyeType=${getRandom(randomAvatar.eyeType)}&eyebrowType=${getRandom(randomAvatar.eyebrowType)}&mouthType=${getRandom(randomAvatar.mouthType)}&skinColor=${getRandom(randomAvatar.skinColor)}`;
}

export default generateAvatarUrl;