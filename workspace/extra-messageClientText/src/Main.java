import java.util.Scanner;


public class Main {

    public static void main(String[] args) {

        //opens the window where the messages will be received and sent
    	TCPClient.OnMessageReceived listener = new TCPClient.OnMessageReceived() {
			@Override
			public void messageReceived(String message) {
				System.out.println("Server: "+message);
			}
		};
		
		TCPClient client = new TCPClient(listener);
		System.out.println("Enter exit to quit.");
		client.start();
		
		String input = "";
		Scanner sc = new Scanner(System.in);
		do {
			input = sc.nextLine();
			client.sendMessage(input);
		} while (!"exit".equals(input));
		
    }

}
