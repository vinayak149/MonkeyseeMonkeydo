package com.server.service;

import com.server.bean.Panelist;
import com.server.repo.PanelistRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PanelistService {

    private  PanelistRepo panelistRepository;

    @Autowired
    public PanelistService(PanelistRepo panelistRepository) {
        this.panelistRepository = panelistRepository;
    }

    public List<Panelist> getAllPanelists() {
        return panelistRepository.findAll();
    }
    public void addPanelist(Panelist panelist)
    {
    	panelistRepository.save(panelist);
    }

    public Panelist getPanelistById(String panelistId) {
        Optional<Panelist> optionalPanelist = panelistRepository.findById(panelistId);
        return optionalPanelist.orElse(null);
    }

    public Panelist updatePanelist(Panelist panelist) {
        return panelistRepository.save(panelist);
    }
}
