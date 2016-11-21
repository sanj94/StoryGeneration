import rita.*;
import java.util.*;
import java.util.Scanner;
//Console c = new Console(10,100,12);
Scanner scan = new Scanner(System.in);

void setup()
{
  size(600,600);
  background(50);
  textSize(20);
  noStroke();
  String word = scan.nextLine();
  System.out.println(word);
  /*
  RiString rs = new RiString("The elephant took a bite!");
  Map data = rs.features();
  String[] pos = rs.pos();
  float y = 15;
  */
  /*
  for(Iterator it = data.keySet().iterator() ; it.hasNext();)
  {
    String key = (String) it.next();
    text(key + ": "+data.get(key) , 25 , y+= 26);
  }
  */
  /*
  for(int i = 0 ; i < pos.length ; i++)
  {
    String word = (String)pos[i];
    text(word,25,y+=26);
  }
  */
  /*
  rs.analyze();
  String [] tokens = split(rs.get(RiTa.TEXT)," "); 
  for(int i = 0 ; i < tokens.length ; i++)
  {
    String word = (String)tokens[i];
    text(word,25,y+=26);
  }
  */
}