package commands;

import core.Lines;
import core.Reader;
import core.Utils;
import net.dv8tion.jda.api.Permission;
import net.dv8tion.jda.api.events.message.MessageReceivedEvent;

public class Help {
	
	/**
	 * Display help
	 * @param event
	 * @author Blackoutburst
	 */
	public static void display(MessageReceivedEvent event) {
		if (event.getMember().hasPermission(Permission.ADMINISTRATOR) || Utils.isStaff(event.getMember())) {
			event.getChannel().sendMessage(event.getAuthor().getAsMention()+", "+Reader.read(Lines.help_admin)).complete();
		} else {
			event.getChannel().sendMessage(event.getAuthor().getAsMention()+", "+Reader.read(Lines.help)).complete();
		}
	}
}
