package com.server.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.bean.Judge;
import com.server.bean.Panelist;
import com.server.bean.Team;
import com.server.bean.User;
import com.server.repo.JudgeRepo;
import com.server.repo.PanelistRepo;
import com.server.repo.TeamRepo;
import com.server.repo.UserRepo;

@Service
public class AdminService {
	private PanelistRepo panelistRepository;
	private TeamRepo teamRepository;
	private UserRepo userRepository;
	private JudgeRepo judgeRepository;

	@Autowired
	public AdminService(PanelistRepo panelistRepository, TeamRepo teamRepository, UserRepo userRepository,
			JudgeRepo judgeRepository) {
		this.panelistRepository = panelistRepository;
		this.teamRepository = teamRepository;
		this.userRepository = userRepository;
		this.judgeRepository = judgeRepository;
	}

	public void assignPanelistsToTeams() {
		List<Panelist> panelists = panelistRepository.findAll();
		List<Team> teams = teamRepository.findAll();

		int totalPanelists = panelists.size();
		int totalTeams = teams.size();
		int idealPanelistsPerTeam = totalPanelists / totalTeams;

		for (Panelist panelist : panelists) {
			// Convert ObjectId to a numerical value
			int panelistIndex = getObjectIdNumericalValue(panelist.getId());

			// Use the panelistIndex to select the team in a cyclic manner
			int teamIndex = panelistIndex % totalTeams;
			Team team = teams.get(teamIndex);

			team.setPanelist(panelist);
			teamRepository.save(team);
		}
	}

	// Convert ObjectId to a numerical value
	private int getObjectIdNumericalValue(String objectId) {
		return Math.abs(objectId.hashCode()); // Converting Object id to num
	}

	public void assignRoleToUser(String userId, String role) {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
		user.setRole(role);
		userRepository.save(user);
		switch (role) {
		case "PANELIST": {
			Panelist panelist = new Panelist(user.getUsername(), user.getEmail());
			panelistRepository.save(panelist);

			break;
		}
		case "JUDGE": {
			Judge judge = new Judge(user.getUsername(), user.getEmail());
			judgeRepository.save(judge);
			break;
		}
		}

	}

}