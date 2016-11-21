package ritaGrammar;
import rita.*;
import java.util.*;
public class ritaGrammar {
	public static void main(String [] args)
	{
		RiGrammar grammar = new RiGrammar();
		grammar.loadFrom("test.grammar");
		/*
		grammar.addRule("<start>", "The <N> <V>.");
		grammar.addRule("<N>","cat",5);
		grammar.addRule("<N>", "dog");
		grammar.addRule("<V>", "meows | barks");
		*/
		String result = grammar.expand();
		
		System.out.println(result);
	}
  
}
