import java.util.Scanner;

import javax.swing.JFrame;


public class Server {

	private static TCPServer server = null;
	
    public static void main(String[] args) {
    	
        //opens the window where the messages will be received and sent
    	TCPServer.OnMessageReceived listener = new TCPServer.OnMessageReceived() {
			@Override
			public void messageReceived(String message) {
				System.out.println("Client: "+message);
			}
		};
		
		TCPServer server = new TCPServer(listener);
		runTextual();
		// Could also create ServerBoard, if we want to bother with Swing
    }
    
    private static void runTextual() {
		System.out.println("Enter exit to quit.");
		server.start();
		
		String input = "";
		Scanner sc = new Scanner(System.in);
		do {
			input = sc.nextLine();
			server.sendMessage(input);
			System.out.println("** Message sent.");
		} while (!"exit".equals(input));
    }

}
