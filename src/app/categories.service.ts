import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartsService } from './carts.service';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  // getlist_of_category_books() {
  //   return [
  //     new category_of_books("1A5"
  //       , "Escape room"
  //       , 88.20
  //       , "Thrillers"
  //       , "Vincent, Jules, Sylvie and Sam are at the peak of their careers in the capital market. They have incorporated the skill of closing deals into a whole of art and are celebrating their success in style. When invited to take part in an escape room challenge as a team exercise, the competitive colleagues are crammed into a skyscraper elevator, eager to prove themselves. But then the lights go out and the doors are sealed, and it soon becomes clear to them that this is no ordinary competition; They are trapped in a dangerous survival game. Captive in the dark, bitter opponents are forced to ignore the old controversies and work as a team to resolve the encrypted clues. Only then will they be able to go free. But during the game their darkest secrets slowly begin to be revealed, and they realize they will have to pay a price for the things they did during the brutal climb up the corporate ladder.As the tension rises and the clues become deadly, all they have left is to solve one last mystery: Which of them will be"
  //       , "https://images-na.ssl-images-amazon.com/images/I/41ePhEX2LwL._AC_SY780_.jpg"),

  //     new category_of_books("1b7",
  //       "Fifteen hours"
  //       , 85.50
  //       , "Thrillers", "hard to sit still when your client is due to die in fifteen hours ...Attorney Alex Sedaka turns to the governor for a last - minute pardon for his client, Clayton Barrow, but in fact he has already come to terms with the fact that he will be released very soon. Executed. Clayton was convicted of raping and murdering his classmate, eighteen-year-old Dorothy Olsen, whom he mercilessly abused at school, and the evidence against him is very compelling.But the victim's mother suddenly makes a surprising suggestion: Barrow's sentence is commuted in exchange for finding out where he hid her daughter's body, before the mother herself dies of a terminal illness from which she suffers.Across the ocean, a nurse watching an American news channel recognizes Dorothy's name. Is the key to solving the mystery in her hands? Alex must now convince Clayton to confess to the act in order to be pardoned, but Clayton continues to stubbornly claim he is innocent. Is this another game in Clayton's chain of games, or is he sentenced to death for no wrong in his palm?"
  //       , "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/013620751.jpg"),
  //     new category_of_books("1c8"
  //       , "Closer than it seems"
  //       , 88.20
  //       , "Thrillers"
  //       , "The disaster, someone once told Melanie Barrick, is always closer than you think.Melanie learned this about her flesh when she grew up from a young age in the nightmarish world of foster families. But she survived and grew up and now she has a loving husband, a full-time job and an incredibly cute baby named Alex, so seemingly it's all behind her. But one evening she goes to pick up Alex from the caregiver and discovers that the nightmare of her life has come true. The social services system took her baby and declared her an unworthy mother. And the system, as Melanie is well aware, does not provide any explanations.Things get even worse when the police raid her home and in an instant she becomes from a normative citizen to an enemy of the public. The indictment, based on solid evidence, would send her to many years in prison and separate her from Alex forever.When it seems that everyone is against her, including her husband who leaves the city and disappears as if swallowed by the earth, Melanie embarks on an impossible journey to prove her innocence, accompanied by a public defender, a good friend and a fiery determination to prevent a structure from experiencing a damned childhood like hers.Amy Kay, the plaintiff in her case, is convinced that this is a sure win for the prosecution and pays almost no attention to the seemingly easy task. Amy is more interested in an old case that was abandoned years ago and never ceases to disturb her: a sophisticated serial rapist who attacked dozens of women and managed to hide his identity and remain anonymous. And this rapist, Amy believes, is waking up to prey again. Close to what it seems is a fast-paced and edgy thriller, replete with surprising twists and turns, about the unbearable ease with which a person can lose his freedom and family and find himself helpless in the face of an opaque and self-righteous system.Brad Perks is an award-winning thriller author, including the Nero Award for Best American Thriller, the Lepti Award for Best Humorous Thriller, and the Seamus Award for Best Detective. Closer to what it seems, like his previous book Do Not Say Nothing, was a bestseller and translated into twenty languages."
  //       , "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/011324184.jpg"),
  //     new category_of_books("1d9"
  //       , "untraceable"
  //       , 88.20
  //       , "Thrillers"
  //       , "Audra Kinney just wanted to get to California safely with her young children Sean and Louise. After finally finding the strength to leave her abusive husband and start a new and healthier life, she took no risks, drove on side roads and made every effort not to attract attention.When a local sheriff stops her on the side of the road, somewhere in Arizona, Audra tries to stay calm and convince herself that nothing will happen, because there is no reason for it to happen. But when the sheriff finds a bag of marijuana in her trunk, which she never put there (or maybe yes?), Her nervousness turns to panic. It seems to her that her biggest nightmare is coming true. She's wrong - and big time. The evil she is about to face is inconceivable. No one believes her and the whole world seems to be against her, so in order to save her loved ones from everything Audra can only rely on herself.Without a Trace is a fine, breathtaking thriller with a dizzying pace that continues to surprise readers right down to the last page."
  //       , "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/011324231.jpg"),
  //     new category_of_books("1c12"
  //       , "Secrets in the dark"
  //       , 39.90
  //       , "Thrillers"
  //       , "It  has been eight months since Mickey Bolliter witnessed the tragic death of his father. Eight months of lies, dark secrets, and unanswered questions. On top of all the trouble, the second year of high school begins on the left foot. Cape, his strange friend, is hospitalized, the beautiful Rachel sends him conflicting messages, his friends on the basketball team hate him ... and agothic horror drops a task on him: her new friend, whom she met in an online chat, has disappeared.While searching for Horror's boyfriend (if he even exists!) Mickey is also reluctantly rescued to the aid of his sworn enemy, Troy Taylor, who is facing a serious problem.And all the while Mickey and his friends dive deeper into the mystery of the Abona shelter, risking their lives in search of answers - to the breathtaking end, where Mickey discovers the incredible truth about his father's fate."
  //       , "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/1616633501-011323591.jpg"),
  //     new category_of_books("78d"
  //       , "Love on Dublin Street"
  //       , 84.60
  //       , "Romance"
  //       , "Addiction is summed up in one simple concept: passion. My name is Dr. Dixon Matthews, and for $ 500 an hour a person can come to me and unpack his deepest and darkest secrets.My personal addiction? Sex.Good fuck is the best medicine. I may be an expert at solving the problems of others, but not at solving my own problems. I know, because I'm a lost cause. I do not have relationships. I do not even do the same woman twice.But all this is about to change thanks to two wonderfully different women who ignited in me my deepest desires.Which one will I choose? I know I should choose But I never said I'm the protagonist of the story or even the good guy. And besides, who wants to be good when it's so fun to be bad? My story is not for the faint of heart. So if you're in the segment, tighten your belts and watch the unexpected. With you in mind ... Monica James spent her teenage years reading the works of Anne Rice, William Shakespeare and Emily Dickenson. When she is not writing, she runs her own business, but she always takes care to balance the two. She loves to write exciting and exciting stories and thus hopes to make her mark on her readers, and her inspiration comes from everyday life. Her books are bestsellers on Amazon USA, UK Canada and Australia."
  //       , "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/011373918.jpg"),
  //     new category_of_books("89e"
  //       , "Temptation in the dark"
  //       , 84.20
  //       , "Romance", "Caleb, who survived sexual labs thanks to Rafik, a mysterious Pakistani officer, carries in his heart a debt that must be paid for in blood. The road was long and uncertain, but for Caleb and for my heart it was nearing its end. Can Caleb sacrifice the woman he loves for revenge? Or will he sacrifice the supreme sacrifice himself?"
  //       , "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/017510007.jpg"),
  //     new category_of_books("45r"
  //       , "One last kiss"
  //       , 88.20
  //       , "Romance"
  //       , "A  kiss that can not go away. A kiss that will last forever. Emily Weiborne has made the decision - she may not completely trust the deadly Rib Salis, but he's the only person who gives her what she needs. With a fight she can finally be who she really is. Surrendering to him is the only thing that leaves her feet on the ground, while the other pieces of her life crumble around her. But a quarrel has secrets, and while struggling to discover them, there is someone who makes sure it does not happen. Time is running out and Emily doubts everything she has known so far about love and friendship. Now she will have to do the impossible - the choice that will decide whether to surrender to the core or save her life."
  //       , "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/011981194.jpg"),
  //     new category_of_books("36q"
  //       , "Wounded love"
  //       , 84.60
  //       , "Romance"
  //       , "Life is like a roller coaster. Once Sydney manages to mend the fragments, there is always something crushing it anew. It's never pleasant, but this time it's really deadly. Peter is the epitome of perfection, a real angel. But let's face it, even an insanely sexy guy who looks a naughty piece. He must have been sent here to ruin her life. A handsome man, piercing blue eyes, dark hair, a devastating body. Add to that his charming wit, and Peter is everything Sydney has ever dreamed of. But when things start to heat up, he shows her where the door is ... and Sydney crawls out of it. Thus ends the worst blind meeting of her life.But then the situation only gets worse. The next morning everything shatters before her eyes. This devastating guy from last night, the one who saw her half naked, stands in front of the class right now and teaches."
  //       , "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/011374005.jpg"),
  //     new category_of_books("258e"
  //       , "Fifty shades of release"
  //       , 88.20
  //       , "Romance"
  //       , "Nothing prepared Anastasia Steele for her encounter with Christian Gray,a young, dizzying and charismatic entrepreneur, and nothing prepared a signal for the intense attraction that would arise between them and the sensual and shaky affair that would follow. But the real surprise that awaited her was Christian's favorite sexual practice , which introduced her to a whole world of feelings and sensations she had not known before. But in order to live in his world, Anastasia needed a greater commitment on his part; And in order not to lose her - Christian agreed.Now they seem to have it all: love, passion, intimacy, wealth and countless  possibilities. But Anna knows that living next to Christian is a  complex challenge : she has to adapt to his ostentatious lifestyle without losing her self, and he in turn must learn to give up his compulsive need Control it. Together they have tremendous power that they seem to be able to handle any trouble and crisis, but bad luck, malice and cruel fate come together to confront them with their darkest fears. Fifty Shades of Release is the third book in a trilogy that has capturedthe hearts of readers and broken sales records in fifty countries around the world. It unfolds an unforgettable love story and is intended for adult readers only."
  //       , "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/011323005.jpg"),
  //     new category_of_books("789s"
  //       , "Upgraded carbon"
  //       , 88.20
  //       , "Science Fiction"
  //       , "Takeshi Kovac touches the hole in his chest from the shot that pierced him from behind, but his death is only a temporary inconvenience. In the 25th century, human consciousness is stored in a cartridge at the base of the skull, and can move to a new body.Kovacs, a former soldier in an elite unit, is brought back to life to investigate the mystery of the death of the richest man in the world. The person who ordered the investigation is the victim himself, who also came back to life but does not remember the crime. The zinvestigation will lead Kovacs into the depths of a dark conspiracy in a world where the rich live forever, and only the poor take turns. This is the first part of Richard Morgan's debut trilogy. Upon its publication it won the Philip K. Prize. Dick as the best science fiction book in the world. He later worked on the most expensive series in Netflix history, Altered Carbon."
  //       , "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/013920549.jpg"),
  //     new category_of_books("326k"
  //       , "The Wizards"
  //       , 79.50
  //       , "Science Fiction"
  //       , "Quentin knew he was not happy. But why not? He carefully compiled all the components of happiness. He performed all the necessary rituals, said the words, lit the candles, sacrificed the victims. But happiness, like a rebellious spirit, refused to come. Quentin Coldwater, a gifted student about to enroll in university, is still secretly addicted to a series of fantasy books he read as a child, about the adventures of five children in a magical land called Pylori. In comparison, his real life looks gray and pale. Then he is suddenly admitted to a prestigious and very secretive university for magician studies in upstate New York, where he acquires a systematic education in practical modern magic.But the magic does not bring Quentin the happiness that awaited him - until he and his friends make a surprising discovery.The Wizards is the first book in a sober fantasy trilogy by Lev Grossman. A television adaptation of the book is currently being produced."
  //       , "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/011193842.jpg"),
  //     new category_of_books("652j"
  //       , "Halloween"
  //       , 97.20
  //       , "Science Fiction"
  //       , "Diana Bishop, a researcher at Yale University, came to Oxford to complete a research paper in the field of alchemy. In the library she orders an ancient manuscript called 'Ashmol 782'. Diana, a descendant of a dynasty of sorcerers, immediately feels that the manuscript is enchanted, but prefers not to verify her feeling. She just does not know that this ancient book of alchemy was considered lost, and its sudden appearance caused a storm in a world of creatures with superhuman powers. Soon an annoying bunch of demons, sorcerers and vampires invade the library's reading room, including Matthew Clermont, a respected secretive geneticist, an avid yogi, a great wine connoisseur - and a vampire who takes a keen interest in 'Ashmol 782'. All Night of the Witches is a lively epic novel that has history and magic, romance and suspense, and it runs between the streets of Oxford and the mountain castles in France and an American town. Deborah Harkens weaves with the skill of a researcher and the talent of a fairy-tale narrator a story of passion and obsession, a clash of alchemy, magic and science, and well-kept secrets of an enchanted world."
  //       , "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/013620758.jpg"),
  //     new category_of_books("246k"
  //       , "With empty hands"
  //       , 80.10
  //       , "Science Fiction"
  //       , "'The real journey is the return ...'Shabek is a member of the new world, in which his ancestors established a utopian and egalitarian society that gives complete freedom to the individual, and transcends property and the human ego. Alone, Shabek returns to form his quarry in the capitalist world in which his cultural heritage lies, with the aim of shattering the walls of alienation built during one hundred and seventy years of total disengagement.He comes out empty-handed, abandons behind him everything he knew and knew, and turns to the unknown. On his way he will find that the great truths on which he grew up are not as absolute as he thought, and that the truth is more complex than he thought.Ursula K. La Gwyn creates in her writing a fascinating vision of man struggling with the tyranny of human nature, and through it she explores the gaping chasm between vision and fulfillment and wonders about the material and spiritual worldviews that accompany us and their moral validity in modern society. This discussion makes empty-handed relevant and meaningful today, no less than it was when it was written forty years ago.Ursula K´ La Gwyn is considered by many to be one of the greatest science fiction writers of all time. Her writing is characterized by a sharp intellectual honesty and the ability to look razor-sharp, yet incredibly sensitive, into the depths of human society and the human psyche. Empty Hands, which has won many awards, is considered the pinnacle of La Gwyn's work, and is now presented in Hebrew in Emanuel Lotem's in - depth translation.The world fell under him, and he was left alone.He always had the fear that this would happen to him, harder than any fear of death. The dead lose themselves and join the rest. He saved himself, and lost the rest.You can go back, come home ... as long as you understand that home is a place you've never been to."
  //       , "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/011250437.jpg"),
  //     new category_of_books("874p"
  //       , "Died mostly"
  //       , 62.10
  //       , "Science Fiction"
  //       , "Kos, the mighty god of old Columb Columb's fire, dies. Tara Abernathy, who was thrown out of magic schools and has just gotten a job in a prestigious witch's office, is sent to try to figure out how the old city god died, and what do we do now? The answers in a fantastic legal thriller 'In every sense of the word."
  //       , "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/011250540.jpg"),


  //     new category_of_books("4687e"
  //       , "Hanan the gardener"
  //       , 66.60
  //       , "Kids", "Hanan Hagan in a cart with a bell travels down the street and sings a hymn to him: loquat, apricot, persimmon, inside of which is hidden a treasure!"
  //       , "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/010033093.jpg"),

  //     new category_of_books("3542g"
  //       , "Eliezer and the Carrot"
  //       , 66.60
  //       , "Kids"
  //       , "Eliezer and the Carrot is a children's song in rhymes. At the center of the story is a huge and stubborn carrot sown in the vegetable garden of Grandpa Eliezer and Grandma Elisheva. One day Grandpa Eliezer tried to get him off the ground, but he did not move, no matter how hard he pulled. Grandma Elisheva came to his aid and pulled as well, but the carrot did not move. Arrived one by one, the granddaughter Abigail, the puppy heb, and the meow cat and helped pull and he still did not move. Only when he joined the 'Mouse Opera' attraction did the carrot come out.In the book version, after removing the carrots, a delicious stew is prepared from it, and all the neighbors are invited to eat. Only the dog, cat and mouse do not eat from the stew because they get their own sweet porridge. The story deals with the message of helping others and volunteering for the other. Thanks to the cooperation of all the characters they manage to get the giant carrot out of the ground. Thus the message deals both with the power of the group, greater than the power of the individual, and also with the cooperation in which more can be achieved than alone."
  //       , "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/011980823.jpg"),

  //     new category_of_books("2654y"
  //       , "I have always loved you"
  //       , 61.20
  //       , "Kids"
  //       , "'I Always Love You' is a charming book about the love relationship between parents and their children I love you for years, hours and also days and weeks and months and so forever I always love you not a second less because that's what parents know best to do ..."
  //       , "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/010200045.jpg"),

  //     new category_of_books("1468a"
  //       , "An act in five balloons"
  //       , 61.20
  //       , "Kids"
  //       , "And suddenly ... boom! Trek! What happened? The balloon exploded, the balloon burst. Five children, five balloons and a cat, in asimple and touching story that accompanied our childhood, and taught us to deal with the end of balloons and other endings, not to forget the lovely illustrations of Ora Eyal!"
  //       , "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/011521610.jpg"),

  //     new category_of_books("3524d"
  //       , "Kramer the cat is constantly sleeping"
  //       , 61.20
  //       , "Kids"
  //       , "Kramer the cat sleeps all the time, Kramer the cat is an old cat. Sleeps all day and sleeps all night,  sleeps in the morning and in the evening and sleeps too. When he finally gets up - he immediately falls asleep ...  A lullaby for toddlers now in the cardboard version."
  //       , "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/011562701.jpg"),

  //     new category_of_books("45698w"
  //       , "Sweet at home"
  //       , 124.20
  //       , "Cooking and Baking"
  //       , "Karin Goren returns - and she has especially sweet news after bringing the secrets of the pros to the home kitchen, opening the door to the world of confectionery for readers and TV viewers and becoming synonymous with the baking hobby that sweeps Israel, Karin Goren invites you home.Dozens of recipes for cakes, cookies and desserts, in a new book that will make you want to stay home ... and start baking. Each recipe is accompanied by appetizing photos and detailed explanations, so that the cake that comes out of your private oven will be no less wonderful than in the book.5 chapters delicious waiting for you inside:pony cakes seem excessive in a good way, amaze your family and guests (and the subsequent social networks!)No Place Like Home, cakes and desserts heartwarming, prepared easily (even without an excuse special ( cheese my favorite cheesecake outstanding , In a variety of stylesHot yeast in new doughs, seductive designs and corrupt fillings in a non-quiet episode about yeastI jar a lot of addictive cookies, which will be eliminated until the last crumb ...Want more?Each recipe in the book comes with conversion suggestions, for adaptation to one additional version (at least): fur, vegan, gluten-free, without added sugar or kosher for Passover. Because especially at this time, we all need a little sweet at home.Karin Goren is a pastry chef, recipe developer, author of best-selling baking books ('Sweet Secrets,' 'Sweet Secrets 2,' 'If Grandma Had a Mixer,' 'Half and Half' and more), and host and judge on TV shows ('Sweet Secrets,' 'Bike of Israel'). She has been baking for two decades, and still gets excited by her charm every day anew."
  //       , "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/1616633501-010200167.jpg"),
  //     new category_of_books("96352q"
  //       , "Israel Aharoni cooks from Asian cuisines"
  //       , 97.20, "Cooking and Baking"
  //       , "Aharoni's affair with Asian cuisines began more than thirty years ago. No wonder: the richness of these kitchens is inexhaustible. They are exciting, colorful, fragrant, sometimes intense in taste, sometimes delicate and restrained, rich and fresh. More than that: they fit in well with the growing trend in recent years of healthy, light and fresh food.Israel Aharoni cooks from Asian cuisines and presents, for the first time in Hebrew, wonderful recipes from four main Asian cuisines: Thai, Vietnamese, Chinese and Indian. Together they form a collection of diverse recipes, in which Iron Flock assets are known and loved alongside great, but lesser-known recipes. It should be noted that all the recipes that appear in the book are suitable for cooking in the home kitchen, and all the ingredients that appear in them can be easily obtained in Israel today."
  //       , "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/010073406.jpg"),
  //     new category_of_books("45139u"
  //       , "The kitchen of Ruthie Russo"
  //       , 124.20
  //       , "Cooking and Baking"
  //       , "Ruthie Russo takes you on a wonderful journey, which begins and ends in her and your kitchen. Many chefs will share recipes with you, but few will teach you to understand food deeply and cook simply and happily. Ruthi Russo's kitchen is very Israeli, but confident enough to peek into other kitchens. It is warm and comforting, but also spicy and daring. A chef with 20 years of experience cooks in it, but even a mother, like you, does not have a spare minute. The door to Ruthie Russo's kitchen is always open. So come on, come on in.Ruthie Russo is a chef and journalist, a graduate of the FCI in Manhattan.Writes with her mother, Nira Russo, the food section of the '7 Days' supplement of Yedioth Ahronoth, presents the program 'Food Break' on educational television and the program 'Cook with a Rainbow' on Channel 12. Her lecture on the connection between our food and identity, economics And Politics, presented at TEDx InternationalRuthi Russo lives in Tel Aviv, is married and a mother of two, an amateur birder, plays the saxophone badly and does not touch the dill."
  //       , "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/1572394253-013372457.jpg"),
  //     new category_of_books("68547u"
  //       , "My family kitchen"
  //       , 98.10
  //       , "Cooking and Baking", "The book contains easy and quick recipes, recipes that must be in every home, recipes that are the most fun to entertain, pamper and indulge in. These are compliments that deserve compliments, pots that are proud to take to a festive meal, desserts that always succeed, and all in a pleasant and light way, with a shopping list that can be obtained today in any supermarket."
  //       , "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/1616633501-014561150.jpg"),
  //     new category_of_books("35264v"
  //       , "The food is ready"
  //       , 49.90
  //       , "Cooking and Baking", "Sheri Ansky's private kitchen, which dedicated her life to defining Israeli cuisine, served as an archive for tracing recipes that have disappeared from the world, and an experimental laboratory of ancient and modern techniques. Over the years, Sherry has visited agricultural fields, markets around the country and the world, the private kitchens of professional chefs and the kitchens of great women - blessed grandmothers, whose oil has spread far and wide among the communities to which they belonged - and learned from them the hidden secrets they always kept for themselves and their daughters. The recipes in this book are basic recipes, which are at the base of the collective memory of most of us. Today more than ever, when the whole country is back to cooking the flavors of the house, and just as the web has become an endless jumble of such and such recipes, it is more important than ever to cook where every recipe is researched, understood and tried countless times until polished to perfection. The recipes in this book can create for you a pure DNA of home cooking: good home-cooked food. You will find in it a green 'patosh' salad with avocado, chicken soup that until the end of days you will be grateful for its recipe, a mixture for the perfect kebab, polenta pastry with stretched sheep cheese, and crispy chips on the outside and soft as puree on the inside. You will find recipes that will regularly come up on your family table with dishes like chicken wings fried on chili sauce, beef bourguignon, perfect white rice, honey tortilla in a pot of wonder, rice porridge and real caramel cream.Born and raised in Jerusalem, Sheri Ansky wrote the popular food section of Maariv's 'Weekend' supplement for many years and authored six best-selling cookbooks, including 'Food' and 'Khamin,' which were published by Keter.Alex Liebek is an Israeli photographer who wins the Israel Prize, who honestly photographs uncompromising pieces of Israeli cultural life. The photographs in the book were taken in the private kitchen of Sherry and Shalev,'I can give my word that even those who have never cooked can trust my mother to succeed hugely. The choice of foods in the book represents our family taste. So now, the foods through which my brothers and I received love, joy and stability - the foods we never got tired of And we are always reassured and reconciled - they are also yours. ' Michal Ansky'"
  //       , "https://d3hb4faco7nbjh.cloudfront.net/media/catalog/product/cache/1/image/300x/9df78eab33525d08d6e5fb8d27136e95/0/1/1621990181-010073948.jpg")



  //   ]
  // }
  constructor(private http: HttpClient, private carts: CartsService) { }
  baseURL: string = "http://localhost:3000/";
  headers = { 'content-type': 'application/json' };
  Category2: category_of_books[] = [];

  addProduct(cart: number): Observable<any> {
    let body = JSON.stringify(cart);
    return this.http.post(this.baseURL + 'cart', body, {
      headers: this.headers,
    });

  }
  getProductsToCart(cart: number): Observable<any> {
    return this.http.get(this.baseURL + 'Categories?SerialNumber=' + cart);
  }
  getProducts(): Observable<any> {
    return this.http.get(this.baseURL + 'Categories');
  }


  getCategoriesThrillers(): Observable<any> {
    // console.log(str)
    return this.http.get(this.baseURL + 'Categories?Category=Thrillers');

  }
  getCategoriesScienceFiction(): Observable<any> {
    // console.log(str)
    return this.http.get(this.baseURL + 'Categories?Category=Science Fiction');

  }
  getCategoriesKids(): Observable<any> {
    return this.http.get(this.baseURL + 'Categories?Category=Kids');

  }
  getCategoriesCookingAndBaking(): Observable<any> {
    return this.http.get(this.baseURL + 'Categories?Category=Cooking and Baking');

  }
  getCategoriesRomance(): Observable<any> {
    return this.http.get(this.baseURL + 'Categories?Category=Romance');
  }


  onClick(form) {
    this.carts.addProduct(form)
  }

}
export class category_of_books {
  SerialNumber: number;
  Name: string;
  Price: number;
  Category: string;
  Description: string;
  ImgUrl: string;
  constructor(SerialNumber: number,
    Name: string,
    Price: number,
    Category: string,
    Description: string,
    ImgUrl: string) {
    this.SerialNumber = SerialNumber;
    this.Name = Name;
    this.Price = Price;
    this.Category = Category;
    this.Description = Description;
    this.ImgUrl = ImgUrl;
  }
}
