package markov;

import rita.*;
import java.io.*;
import java.net.*;
import org.json.*;

public class driver {
	public static void main(String [] args) throws Exception
	{
		 URL yahoo = new URL(" http://api.conceptnet.io/c/en/example");
		 URLConnection yc = yahoo.openConnection();
		 BufferedReader in = new BufferedReader(
                 new InputStreamReader(
                 yc.getInputStream()));
		 
String inputLine;


while ((inputLine = in.readLine()) != null) 
{
	//JSONObject j = new JSONObject("{"+inputLine+"}");
System.out.println(inputLine);
}
in.close();

		/*
	RiMarkov rm = new RiMarkov(3);
	rm.loadText("The girl went to dinner after the game. The teacher went to the game with the girl.");
	String[] result = rm.generateSentences(2);
	System.out.println(result[0]);
	//System.out.println("Hello World");
	 
	 */
/*
		Map args1 = new HashMap();
		args1.put("ignoreCase", false);
		args1.put("ignoreStopWords", true);

		String[] lines = RiTa.kwic("It is a hot summer day. The summer is here.", "The",args1);
		System.out.println(lines[0]);
		*/
	}

}
