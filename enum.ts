enum Membership {
    Simple,
    Standard,
    Premium
};

const membership = Membership.Premium;
const membershipReverse = Membership[2];

// console.log(membership);
// console.log(membershipReverse);

enum SocialMedia {
    Inst = 'Instagram',
    FB = 'Facebook',
    Tweet = 'Twiter'
}

const social = SocialMedia.Inst;
console.log(social);