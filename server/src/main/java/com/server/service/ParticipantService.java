package com.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.bean.Participant;
import com.server.repo.ParticipantRepo;

import java.util.List;
import java.util.Optional;
 
@Service
public class ParticipantService {
 
    private final ParticipantRepo participantRepository;
 
    @Autowired
    public ParticipantService(ParticipantRepo participantRepository) {
        this.participantRepository = participantRepository;
    }
 
    public List<Participant> getAllParticipants() {
        return participantRepository.findAll();
    }
 
    public Participant getParticipantById(String id) {
        Optional<Participant> optionalParticipant = participantRepository.findById(id);
        return optionalParticipant.orElse(null);
    }
 
    public Participant addParticipant(Participant participant) {
        return participantRepository.save(participant);
 
    }
 
    public Participant updateParticipant(String id, Participant participant) {
        Optional<Participant> optionalExistingParticipant = participantRepository.findById(id);
 
        if (optionalExistingParticipant.isPresent()) {
            Participant existingParticipant = optionalExistingParticipant.get();
            // Update the fields based on your requirements
            existingParticipant.setName(participant.getName());
            existingParticipant.setEmail(participant.getEmail());
            existingParticipant.setIdeaTitle(participant.getIdeaTitle());
            existingParticipant.setIdeaDescription(participant.getIdeaDescription());
 
            return participantRepository.save(existingParticipant);
        }
 
        return null; // Participant with the given ID not found
    }
 
    public void deleteParticipant(String id) {
        participantRepository.deleteById(id);
    }
}