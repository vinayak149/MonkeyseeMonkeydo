package com.server.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.bean.Panelist;
import com.server.bean.Team;
import com.server.repo.PanelistRepo;
import com.server.repo.TeamRepo;

@Service
public class AdminService {
    private final PanelistRepo panelistRepository;
    private final TeamRepo teamRepository;

    @Autowired
    public AdminService(PanelistRepo panelistRepository, TeamRepo teamRepository) {
        this.panelistRepository = panelistRepository;
        this.teamRepository = teamRepository;
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
        return Math.abs(objectId.hashCode()); //Converting Object id to num
    }
}

