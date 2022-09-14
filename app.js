const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");


const heading = "let's Find Out Your Star Sign !";
const question = "What's Your Star Sign ?";
const paragraph = " Your Star Sign is how you answer the question “I am” and how you experience life and express your individuality.";
const secondQuestion="Wanna Know about few Other signs?";
const thirdQuestion="What's Your Moon Sign ?";
const secondParagraph="Your moon sign is one of the most important parts of your astrological profile: it represents your emotional side, your feelings, intuition and memories. It also dictates your relationship with the main maternal influences in your life, as well as how you nurture and care for others.";
const fourthQuestion="What's Your Rising Sign ?";
const thirdParagraph="Rising sign (also known as your Ascendant) is your social personality. It is how you dawn on people as it relates to the zodiac sign that was on the Eastern horizon when you were born. Your rising sign represents your physical body and outward style.";


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("home", { heading: heading, question: question, paragraph: paragraph, secondQuestion:secondQuestion, thirdQuestion:thirdQuestion, secondParagraph:secondParagraph, fourthQuestion:fourthQuestion,  thirdParagraph: thirdParagraph });
});

app.post("/", function (req, res) {
    console.log(req.body.date);
    console.log(req.body.month);

    if ((req.body.date >= 21 && req.body.date <= 31) && (req.body.month == "March" || req.body.month == "march")) {
        res.render("Findings", { headingOfFindings: "Aries♈",li1:"Ruling planet: Mars", li2:"Most compatible with Libra, Gemini, Aquarius, Aries, Leo, Sagittarius",li3:"Aries is a cardinal fire sign, so these guys have BIG energy and like to take control.", li4:"Famous Aries: Emma Watson, Lady Gaga, Kourtney Kardashian, Shay Mitchell, Mariah Carey", li5:"You can always count on an Aries to take charge of any situation. Their willingness to take initiative carries over in romantic situations too. They hate dating people with low energy or anyone who makes them feel like they’re keeping them from reaching their full potential. If you’re a non-Aries dating an Aries, you better be up to the challenge of keeping them entertained and interested or you may lose them.", li6:"Marchesella says, “An upside to Aries’ natural impatience is that they don’t hold grudges. When you think about it, it takes a lot of patience to hold on to resentments.”"  });
    }
    if ((req.body.date>=1 &&   req.body.date <= 19) && (req.body.month == "April" || req.body.month == "april")) {
        res.render("Findings", { headingOfFindings: "Aries♈", li1:"Ruling planet: Mars", li2:"Most compatible with Libra, Gemini, Aquarius, Aries, Leo, Sagittarius",li3:"Aries is a cardinal fire sign, so these guys have BIG energy and like to take control.", li4:"Famous Aries: Emma Watson, Lady Gaga, Kourtney Kardashian, Shay Mitchell, Mariah Carey", li5:"You can always count on an Aries to take charge of any situation. Their willingness to take initiative carries over in romantic situations too. They hate dating people with low energy or anyone who makes them feel like they’re keeping them from reaching their full potential. If you’re a non-Aries dating an Aries, you better be up to the challenge of keeping them entertained and interested or you may lose them.", li6:"Marchesella says, “An upside to Aries’ natural impatience is that they don’t hold grudges. When you think about it, it takes a lot of patience to hold on to resentments.”" });

    }


    if ((req.body.date >= 20 && req.body.date <= 30) && (req.body.month == "April" || req.body.month == "april")) {
        res.render("Findings", { headingOfFindings: "Taurus♉", li1:"Ruling planet: Venus", li2:"Most compatible with: Scorpio, Cancer, Pisces, Taurus, Virgo, Capricorn", li3:"Taurus is a fixed earth sign, so they’re ~rooted~ in the earth. And they’re not about change. These bulls know what they want and they want to keep it that way, thanks.", li4:"Famous Taureans: Adele, The Rock, Gigi Hadid, Channing Tatum, Tina Fey",li5:"As an earth sign, Taurus is one of the more reliable, stable signs of the zodiac. They’re grounded, and they’re there for the long haul. This makes them really good at long-distance relationships especially, as it takes way more than distance to shake their confidence and sense of security.", li6:"Marchesella says, “On the one hand, Taurus is the sign of hoarding, possessiveness, and territoriality, but it is also the sign that learns to ‘let go.’ Letting go on all levels, materially, emotionally, energetically, is the only way that one becomes truly self-possessed, and that’s really what Taurus seeks.”" });
    }

    if ((req.body.date>=1 &&  req.body.date <= 20) && (req.body.month == "May" || req.body.month == "may")) {
        res.render("Findings", { headingOfFindings: "Taurus♉", li1:"Ruling planet: Venus", li2:"Most compatible with: Scorpio, Cancer, Pisces, Taurus, Virgo, Capricorn", li3:"Taurus is a fixed earth sign, so they’re ~rooted~ in the earth. And they’re not about change. These bulls know what they want and they want to keep it that way, thanks.", li4:"Famous Taureans: Adele, The Rock, Gigi Hadid, Channing Tatum, Tina Fey",li5:"As an earth sign, Taurus is one of the more reliable, stable signs of the zodiac. They’re grounded, and they’re there for the long haul. This makes them really good at long-distance relationships especially, as it takes way more than distance to shake their confidence and sense of security.", li6:"Marchesella says, “On the one hand, Taurus is the sign of hoarding, possessiveness, and territoriality, but it is also the sign that learns to ‘let go.’ Letting go on all levels, materially, emotionally, energetically, is the only way that one becomes truly self-possessed, and that’s really what Taurus seeks.” "});
    }



    if ((req.body.date >= 21 && req.body.date <= 31) && (req.body.month == "May" || req.body.month == "may")) {

        res.render("Findings", { headingOfFindings: "Gemini♊", li1:"Ruling planet: Mercury", li2:"Most compatible with Sagittarius, Libra, Gemini, Aquarius, Aries, Leo", li3:"These twins are mutable and the most adaptable of the air signs. As such, Geminis tend to be pretty fluid—hopping from one great idea or direction to the next.", li4:"Famous Geminis: Naomi Campbell, Kanye West, Angelina Jolie, Marilyn Monroe", li5:"While a Gemini may get a bad rap for being “two-faced,” they’re actually very loyal friends who are often faced with indecision because they want to take all sides into consideration. If you’re a Gemini, keep in mind that any decision is often better than no decision, and if you’re a friend of a Gemini, remember that they’re probably trying their best.", li6:"Marchesella says, “For as many Chatty Cathy, motormouth, blabbering twins as there are in the world, there are also introverted twins who are busy reading, writing, and having insightful thoughts. We don’t hear from them because they’re busy thinking. Similarly, while Gemini might be curious about traveling the world, the best part of the trip is going back home to the neighborhood, which is really the center of its universe.”" });
    }

    if ((req.body.date>=1 && req.body.date <= 20) && (req.body.month == "June" || req.body.month == "june")) {

        res.render("Findings", { headingOfFindings: "Gemini♊",  li1:"Ruling planet: Mercury", li2:"Most compatible with Sagittarius, Libra, Gemini, Aquarius, Aries, Leo", li3:"These twins are mutable and the most adaptable of the air signs. As such, Geminis tend to be pretty fluid—hopping from one great idea or direction to the next.", li4:"Famous Geminis: Naomi Campbell, Kanye West, Angelina Jolie, Marilyn Monroe", li5:"While a Gemini may get a bad rap for being “two-faced,” they’re actually very loyal friends who are often faced with indecision because they want to take all sides into consideration. If you’re a Gemini, keep in mind that any decision is often better than no decision, and if you’re a friend of a Gemini, remember that they’re probably trying their best.", li6:"Marchesella says, “For as many Chatty Cathy, motormouth, blabbering twins as there are in the world, there are also introverted twins who are busy reading, writing, and having insightful thoughts. We don’t hear from them because they’re busy thinking. Similarly, while Gemini might be curious about traveling the world, the best part of the trip is going back home to the neighborhood, which is really the center of its universe.”" });
    }



    if ((req.body.date >= 21 && req.body.date <= 30) && (req.body.month == "June" || req.body.month == "june")) {

        res.render("Findings", { headingOfFindings: "Cancer♋" ,li1:"Ruling planet: the Moon", li2:"Most compatible with Capricorn, Cancer, Scorpio, Pisces, Taurus, Virgo", li3:"Cancers are cardinal water signs, so they like to take action, but they’re also in touch with their ~emotional side~. These crabs tend to be leaders in the family and home fronts.", li4:"Famous Cancers: Selena Gomez, Tom Hanks, Princess Diana, Ariana Grande", li5:"Cancers are very emotional creatures who are very in tune with those around them. Given the emphasis they place on interpersonal relationships, tiffs are never just tiffs. If you hurt a Cancer, be aware that they might not welcome you back into their lives with such open arms the second time around, if at all.", li6:"Marchesella says that while Cancers are “often known to avoid conflict at all costs, just mess around with a loved one and you’ll see the fierce, fighting crab come at you!”" });
    }

    if ((req.body.date>=1 &&   req.body.date <= 22) && (req.body.month == "July" || req.body.month == "july")) {

        res.render("Findings", { headingOfFindings: "Cancer♋" ,li1:"Ruling planet: the Moon", li2:"Most compatible with Capricorn, Cancer, Scorpio, Pisces, Taurus, Virgo", li3:"Cancers are cardinal water signs, so they like to take action, but they’re also in touch with their ~emotional side~. These crabs tend to be leaders in the family and home fronts.", li4:"Famous Cancers: Selena Gomez, Tom Hanks, Princess Diana, Ariana Grande", li5:"Cancers are very emotional creatures who are very in tune with those around them. Given the emphasis they place on interpersonal relationships, tiffs are never just tiffs. If you hurt a Cancer, be aware that they might not welcome you back into their lives with such open arms the second time around, if at all.", li6:"Marchesella says that while Cancers are “often known to avoid conflict at all costs, just mess around with a loved one and you’ll see the fierce, fighting crab come at you!”" });
    }





    if ((req.body.date >= 23 && req.body.date <= 31) && (req.body.month == "July" || req.body.month == "july")) {
        res.render("Findings", { headingOfFindings: "Leo♌", li1:"Ruling planet: the Sun", li2:"Most compatible with Aquarius, Leo, Aries, Sagittarius, Gemini, Libra", li3:"The lion is a fixed fire sign, so basically, they’re both passionate and stubborn AF. They know what they want and they won’t budge.", li4:"Famous Leos: Barack Obama, Kylie Jenner, Jennifer Lawrence, J.Lo", li5:"Leos are often dismissed as self-centered, but they’re also one of the most loyal and devoted signs in the zodiac. You’ll rarely meet a Leo unwilling to help out their friends, even if it makes them look bad or isn’t the wisest financial move. But would you really expect anything less than that for the sign that’s represented by the lion and ruled by the Sun?", li6:"Marchesella says, “These are the two sides of the lion: Despite its sunny disposition, Leo has the capacity for bleak moods, like the black clouds covering the sun on a bad day.”" });
    }

    if ((req.body.date>=1 && req.body.date <= 22) && (req.body.month == "August" || req.body.month == "august")) {

        res.render("Findings", { headingOfFindings: "Leo♌", li1:"Ruling planet: the Sun", li2:"Most compatible with Aquarius, Leo, Aries, Sagittarius, Gemini, Libra", li3:"The lion is a fixed fire sign, so basically, they’re both passionate and stubborn AF. They know what they want and they won’t budge.", li4:"Famous Leos: Barack Obama, Kylie Jenner, Jennifer Lawrence, J.Lo", li5:"Leos are often dismissed as self-centered, but they’re also one of the most loyal and devoted signs in the zodiac. You’ll rarely meet a Leo unwilling to help out their friends, even if it makes them look bad or isn’t the wisest financial move. But would you really expect anything less than that for the sign that’s represented by the lion and ruled by the Sun?", li6:"Marchesella says, “These are the two sides of the lion: Despite its sunny disposition, Leo has the capacity for bleak moods, like the black clouds covering the sun on a bad day.”" });
    }





    if ((req.body.date >= 23 && req.body.date <= 31) && (req.body.month == "August" || req.body.month == "august")) {

        res.render("Findings", { headingOfFindings: "Virgo♍", li1:"Ruling planet: Mercury", li2:"Most compatible with Pisces, Cancer, Scorpio, Virgo, Taurus, Capricorn", li3:"Virgos are mutable earth signs. They’re heavily influenced by their environment and known for being really reasonable.", li4:"Famous Virgos: Beyoncé, Zendaya, Cameron Diaz, Nick Jonas, Bernie Sanders", li5:"Detail-oriented and organized, Virgo’s intensity for work and life can be intimidating to others at first. If you’re a Virgo, remember to take a step back and relax every so often. Sometimes the outcome will be the same regardless of whether you put 10 seconds or 10 hours into a task.", li6:"Marchesella says, “Inside every well-organized, well-functioning, productive Virgo, there’s a very disorganized, not so well-functioning Virgo who gets in the way of its own productivity by losing the forest for the trees.”" });
    }

    if ((req.body.date>=1 &&  req.body.date <= 22) && (req.body.month == "September" || req.body.month == "september")) {

        res.render("Findings", { headingOfFindings: "Virgo♍", li1:"Ruling planet: Mercury", li2:"Most compatible with Pisces, Cancer, Scorpio, Virgo, Taurus, Capricorn", li3:"Virgos are mutable earth signs. They’re heavily influenced by their environment and known for being really reasonable.", li4:"Famous Virgos: Beyoncé, Zendaya, Cameron Diaz, Nick Jonas, Bernie Sanders", li5:"Detail-oriented and organized, Virgo’s intensity for work and life can be intimidating to others at first. If you’re a Virgo, remember to take a step back and relax every so often. Sometimes the outcome will be the same regardless of whether you put 10 seconds or 10 hours into a task.", li6:"Marchesella says, “Inside every well-organized, well-functioning, productive Virgo, there’s a very disorganized, not so well-functioning Virgo who gets in the way of its own productivity by losing the forest for the trees.”" });
    }




    if ((req.body.date >= 23 && req.body.date <= 30) && (req.body.month == "September" || req.body.month == "september")) {
        res.render("Findings", { headingOfFindings: "Libra♎", li1:"Ruling planet: Venus", li2:"Most compatible with Aries, Leo, Sagittarius, Libra, Gemini, Aquarius", li3:"Intellectual, analytical Libras are cardinal air signs. They are all about the aesthetics and make *chef’s kiss* cultural critiques.", li4:"Famous Libras: Kim Kardashian, Zac Efron, Bella Thorne, Usher, Halsey", li5:"A Libra never makes a decision willy-nilly. They always try to take as much into account as possible before making a choice, and their worst fear is being unfair or cruel to someone (even if they might deserve it). If you’re a Libra, try to remember that life isn’t black-and-white and it’s okay to change your mind. If you’re a friend of a Libra, try not to abuse their kindness and patience.", li6:"Marchesella says, “If the sign of the balanced scales knows about equality better than the rest of us, then perhaps Libra feels a little more equal than the rest of us. That’s the irony of the sign. In its fight for justice, Libra runs the risk of overstepping its bounds and being a little unfair to others.”" });
    }

    if ((req.body.date>=1 && req.body.date <= 22) && (req.body.month == "October" || req.body.month == "october")) {

        res.render("Findings", { headingOfFindings: "Libra♎", li1:"Ruling planet: Venus", li2:"Most compatible with Aries, Leo, Sagittarius, Libra, Gemini, Aquarius", li3:"Intellectual, analytical Libras are cardinal air signs. They are all about the aesthetics and make *chef’s kiss* cultural critiques.", li4:"Famous Libras: Kim Kardashian, Zac Efron, Bella Thorne, Usher, Halsey", li5:"A Libra never makes a decision willy-nilly. They always try to take as much into account as possible before making a choice, and their worst fear is being unfair or cruel to someone (even if they might deserve it). If you’re a Libra, try to remember that life isn’t black-and-white and it’s okay to change your mind. If you’re a friend of a Libra, try not to abuse their kindness and patience.", li6:"Marchesella says, “If the sign of the balanced scales knows about equality better than the rest of us, then perhaps Libra feels a little more equal than the rest of us. That’s the irony of the sign. In its fight for justice, Libra runs the risk of overstepping its bounds and being a little unfair to others.”" });
    }





    if ((req.body.date >= 23 && req.body.date <= 31) && (req.body.month == "October" || req.body.month == "october")) {
        res.render("Findings", { headingOfFindings: "Scorpio♏", li1:"Ruling planets: Pluto", li2:"Most compatible with Taurus, Cancer, Scorpio, Pisces, Virgo, Capricorn", li3:"Scorpios are fixed water signs, and they’re often described as the fiery side of water. They have a gift for understanding intimacy and deep desires, but as fixed signs, they can get stuck in an emotional spiral all too easily.", li4:"Famous Scorpios: Drake, Katy Perry, Kendall Jenner, Leonardo DiCaprio, Emma Stone", li5:"Scorpios are known for the emotional intensity of their relationships. They never do something half-assed and will know within seconds whether you’ll get along or not. They’ll never admit it because they have ~emotional walls~ and prefer to look aloof, but they’re very loyal people.", li6:"Marchesella says, “For every jealous, possessive, controlling Scorpio, there’s another one that has learned the joys of letting go, being free, and experiencing detachment. Scorpio might be the sign of grudges but it’s also the sign that knows it is forgiveness that brings freedom.”" });
    }

    if ((req.body.date>=1 &&   req.body.date <= 21) && (req.body.month == "November" || req.body.month == "november")) {

        res.render("Findings", { headingOfFindings: "Scorpio♏", li1:"Ruling planets: Pluto", li2:"Most compatible with Taurus, Cancer, Scorpio, Pisces, Virgo, Capricorn", li3:"Scorpios are fixed water signs, and they’re often described as the fiery side of water. They have a gift for understanding intimacy and deep desires, but as fixed signs, they can get stuck in an emotional spiral all too easily.", li4:"Famous Scorpios: Drake, Katy Perry, Kendall Jenner, Leonardo DiCaprio, Emma Stone", li5:"Scorpios are known for the emotional intensity of their relationships. They never do something half-assed and will know within seconds whether you’ll get along or not. They’ll never admit it because they have ~emotional walls~ and prefer to look aloof, but they’re very loyal people.", li6:"Marchesella says, “For every jealous, possessive, controlling Scorpio, there’s another one that has learned the joys of letting go, being free, and experiencing detachment. Scorpio might be the sign of grudges but it’s also the sign that knows it is forgiveness that brings freedom.”" });

    }




    if ((req.body.date >= 22 && req.body.date <= 30) &&(req.body.month == "November" || req.body.month == "november")) {

        res.render("Findings", { headingOfFindings: "Sagittarius♐", li1:"Ruling planet: Jupiter", li2:"Most compatible with Gemini, Aries, Leo, Sagittarius, Libra, Aquarius", li3:"As a mutable fire sign, Sag is a dynamic and adaptable leader. But given the fact that they’re mutable, they can be a bit unreliable at times. Don’t try to tie a Sag down.", li4:"Famous Sagittariuses: Taylor Swift, Nicki Minaj, Miley Cyrus, Jay-Z", li5:"While mostly known for their humor and wit, Sagittarians are also one of the most sensitive signs in the zodiac. They love deep discussions and are some of the most genuine listeners and conversationalists you’ll ever meet.", li6:"Marchesella says, “Sagittarius is the sign that can travel the world in its search for truth, but like Dorothy in The Wizard of Oz, it finds everything it needs to know right in its own backyard.”" });
    }

    if ((req.body.date>=1 &&  req.body.date <= 21) && (req.body.month == "December" || req.body.month == "december")) {

        res.render("Findings", { headingOfFindings: "Sagittarius♐", li1:"Ruling planet: Jupiter", li2:"Most compatible with Gemini, Aries, Leo, Sagittarius, Libra, Aquarius", li3:"As a mutable fire sign, Sag is a dynamic and adaptable leader. But given the fact that they’re mutable, they can be a bit unreliable at times. Don’t try to tie a Sag down.", li4:"Famous Sagittariuses: Taylor Swift, Nicki Minaj, Miley Cyrus, Jay-Z", li5:"While mostly known for their humor and wit, Sagittarians are also one of the most sensitive signs in the zodiac. They love deep discussions and are some of the most genuine listeners and conversationalists you’ll ever meet.", li6:"Marchesella says, “Sagittarius is the sign that can travel the world in its search for truth, but like Dorothy in The Wizard of Oz, it finds everything it needs to know right in its own backyard.”" });
    }





    if ((req.body.date >= 22 && req.body.date <= 31)&&(req.body.month == "December" || req.body.month == "december")) {

        res.render("Findings", { headingOfFindings: "Capricorn♑", li1:"Ruling planet: Saturn", li2:"Most compatible with Cancer, Taurus, Virgo, Scorpio, Capricorn, Pisces", li3:"An earth sign and a cardinal sign, these sea-goats are in control of their material environment. They’re business-minded go-getters.", li4:"Famous Capricorns: Zayn Malik, Gabby Douglas, Michelle Obama, Nina Dobrev", li5:"While Capricorns may seem all wise and responsible on the outside, they’re often secretly fighting back tons of insecurity on the inside. While people in their lives might not be able to sense it (which is the goal of every cool, calm, and collected Capricorn), it’s never a bad idea to check in with people every once in a while and open up.", li6:"Marchesella says, “For all the worldly success, reputation, and visibility that the old goat seeks out in the world, all that it’s really looking for is the security that comes from hearth and home. Capricorn might be looking to get to the top of the mountain but always in the hopes that there’s a cozy little cabin up there with loved ones who await its arrival. Similarly, that hard exterior is just to protect a very sensitive inner world.”" });
    }

    if ((req.body.date>=1 &&  req.body.date <= 19) && (req.body.month == "January" || req.body.month == "january")) {

        res.render("Findings", { headingOfFindings: "Capricorn♑", li1:"Ruling planet: Saturn", li2:"Most compatible with Cancer, Taurus, Virgo, Scorpio, Capricorn, Pisces", li3:"An earth sign and a cardinal sign, these sea-goats are in control of their material environment. They’re business-minded go-getters.", li4:"Famous Capricorns: Zayn Malik, Gabby Douglas, Michelle Obama, Nina Dobrev", li5:"While Capricorns may seem all wise and responsible on the outside, they’re often secretly fighting back tons of insecurity on the inside. While people in their lives might not be able to sense it (which is the goal of every cool, calm, and collected Capricorn), it’s never a bad idea to check in with people every once in a while and open up.", li6:"Marchesella says, “For all the worldly success, reputation, and visibility that the old goat seeks out in the world, all that it’s really looking for is the security that comes from hearth and home. Capricorn might be looking to get to the top of the mountain but always in the hopes that there’s a cozy little cabin up there with loved ones who await its arrival. Similarly, that hard exterior is just to protect a very sensitive inner world.”" });
    }




    if ((req.body.date >= 20 && req.body.date <= 31) && (req.body.month == "January" || req.body.month == "january")) {

        res.render("Findings", { headingOfFindings: "Aquarius♎", li1:"Ruling planet: Uranus", li2:"According to the Cosmopolitan Bedside Astrologer, Aquarians are most compatible with Leo, Gemini, Libra, Aquarius, Aries, or Sagittarius.", li3:"So every sign has a modality or a point in the cycle: the beginning (cardinal) or the shaker-uppers, the middle (fixed) or the “grounded” ones, and the end (mutable) or the open-minded types. And each sign is aligned with one of the four elements: earth, fire, water, or air. Aquarius is a fixed air sign, so they’re highly intellectual and philosophical. But they can also be majorly headstrong.", li4:"Famous Aquarians: Oprah, Harry Styles, Ellen DeGeneres, Justin Timberlake, Ashton Kutcher", li5:"Aquarians may be very reserved and shy or very loud and in charge. While that might seem contradictory, the underlying trait of honesty (even if it’s brutal) is a driving force behind all Aquarians. You can always rely on an Aquarius to tell it like it is and give you a straight answer, no matter how uncomfortable it may be at first.", li6:"Certified astrologer John Marchesella says, “The water bearer loves, loves, loves its freedom, but eventually, when freedom is the only goal, it can get a little limiting. That’s when Aquarius realizes its freedom has become its prison.”" });
    }

    if ((req.body.date>=1 &&   req.body.date <= 18) && (req.body.month == "February" || req.body.month == "february")) {

        res.render("Findings", { headingOfFindings: "Aquarius♎", li1:"Ruling planet: Uranus", li2:"According to the Cosmopolitan Bedside Astrologer, Aquarians are most compatible with Leo, Gemini, Libra, Aquarius, Aries, or Sagittarius.", li3:"So every sign has a modality or a point in the cycle: the beginning (cardinal) or the shaker-uppers, the middle (fixed) or the “grounded” ones, and the end (mutable) or the open-minded types. And each sign is aligned with one of the four elements: earth, fire, water, or air. Aquarius is a fixed air sign, so they’re highly intellectual and philosophical. But they can also be majorly headstrong.", li4:"Famous Aquarians: Oprah, Harry Styles, Ellen DeGeneres, Justin Timberlake, Ashton Kutcher", li5:"Aquarians may be very reserved and shy or very loud and in charge. While that might seem contradictory, the underlying trait of honesty (even if it’s brutal) is a driving force behind all Aquarians. You can always rely on an Aquarius to tell it like it is and give you a straight answer, no matter how uncomfortable it may be at first.", li6:"Certified astrologer John Marchesella says, “The water bearer loves, loves, loves its freedom, but eventually, when freedom is the only goal, it can get a little limiting. That’s when Aquarius realizes its freedom has become its prison.”" });
    }





    if ((req.body.date >= 19 && req.body.date <= 28)&&(req.body.month == "February" || req.body.month == "february")) {
      
            res.render("Findings", { headingOfFindings: "Pisces♓", li1:"Ruling planet: Neptune", li2:"Most compatible with Virgo, Cancer, Scorpio, Taurus, Pisces, Capricorn", li3:"The fish is the most impressionable and spiritual of the zodiac. As a mutable modality and a water sign, they’re very in touch with their emotions and they’re open to change. They truly do like to go with the flow!", li4:"Famous Pisces: Justin Bieber, Rihanna, Steph Curry, Camila Cabello, Carrie Underwood, Steve Jobs", li5:"Über-sensitive Pisces will often puts others’ needs first—sometimes to such an extent they’ll neglect their own. If you’re a Pisces, watch out for this and make sure you’re not letting people take advantage of you. And if you’re a friend of Pisces, keep an eye out and make sure you’re not abusing your Piscean friend’s sensitivity and devotion.", li6:"Marchesella says, “If a Pisces feels a need to save the world, then there must be quite a bit of narcissism there. After all, only a narcissist would feel that much power! So, too, when a Pisces blames itself for every little thing that goes wrong, as often it does, it implies much more influence than any human has.”" });
        }
    

    if (( req.body.date>=1 && req.body.date <= 20)&&(req.body.month == "March" || req.body.month == "march")) {
       
            res.render("Findings", { headingOfFindings: "Pisces♓", li1:"Ruling planet: Neptune", li2:"Most compatible with Virgo, Cancer, Scorpio, Taurus, Pisces, Capricorn", li3:"The fish is the most impressionable and spiritual of the zodiac. As a mutable modality and a water sign, they’re very in touch with their emotions and they’re open to change. They truly do like to go with the flow!", li4:"Famous Pisces: Justin Bieber, Rihanna, Steph Curry, Camila Cabello, Carrie Underwood, Steve Jobs", li5:"Über-sensitive Pisces will often puts others’ needs first—sometimes to such an extent they’ll neglect their own. If you’re a Pisces, watch out for this and make sure you’re not letting people take advantage of you. And if you’re a friend of Pisces, keep an eye out and make sure you’re not abusing your Piscean friend’s sensitivity and devotion.", li6:"Marchesella says, “If a Pisces feels a need to save the world, then there must be quite a bit of narcissism there. After all, only a narcissist would feel that much power! So, too, when a Pisces blames itself for every little thing that goes wrong, as often it does, it implies much more influence than any human has.”" });
        }
    
else{
    res.render("Findings", { headingOfFindings: "Wrong Input ! Try Again." });
}


});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}



app.listen(port, function () {
    console.log("Server has started successfully.");
});