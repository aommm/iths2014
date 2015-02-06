import java.util.Scanner;


public class Main {

	/**
	 * @param args
	 */
	public static void main(String[] args) {

		Server.OnMessageReceived listener = new Server.OnMessageReceived() {
			@Override
			public void messageReceived(String msg) {
				System.out.println("Client: "+msg);
			}
		};
		
		Server server = new Server(listener);
		server.start();
		
		
		boolean running = true;
		Scanner sc = new Scanner(System.in);
		while (running) {
			String input = sc.nextLine();
			if (input.equals("exit")) {
				running = false;
			} else {
				server.sendMessage(input);
			}
		}
		
	}

}
