package com.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.bean.Idea;
import com.server.bean.Participant;
import com.server.bean.User;
import com.server.repo.IdeaRepo;
import com.server.repo.ParticipantRepo;

import java.util.List;
import java.util.Optional;

@Service
public class ParticipantService {

    private ParticipantRepo participantRepository;
    private IdeaRepo ideaRepository;

    @Autowired
    public ParticipantService(ParticipantRepo participantRepository, IdeaRepo ideaRepository) {
        this.participantRepository = participantRepository;
        this.ideaRepository = ideaRepository;
    }

    public List<Participant> getAllParticipants() {
        return participantRepository.findAll();
    }

    public Participant getParticipantById(String id) {
        Optional<Participant> optionalParticipant = participantRepository.findById(id);
        return optionalParticipant.orElse(null);
    }

    public Participant addParticipant(Participant participant) {
        // Save the Idea first to get the generated ID
       
        Participant savedParticipant = participantRepository.save(participant);

        return savedParticipant;
    }

    public Participant updateParticipant(String id, Participant updatedParticipant) {
        Optional<Participant> optionalExistingParticipant = participantRepository.findById(id);

        if (optionalExistingParticipant.isPresent()) {
            Participant existingParticipant = optionalExistingParticipant.get();

            // Update the fields based on your requirements
            existingParticipant.setTeam(updatedParticipant.getTeam());
            existingParticipant.setName(updatedParticipant.getName());
            existingParticipant.setEmail(updatedParticipant.getEmail());

            // Save the updated Idea (if needed)
           

            // Save the updated Participant
            return participantRepository.save(existingParticipant);
        }

        return null; // Participant with the given ID not found
    }
    


    public void deleteParticipant(String id) {
        participantRepository.deleteById(id);
    }
    public void saveParticipant(Participant participant)
    {
    	participantRepository.save(participant);
    }
    public Participant findByEmail(String email) {
        return participantRepository.findByEmail(email);
    }
    public Participant findByUsernameAndEmail(String username, String email) {
        return participantRepository.findByNameAndEmail(username, email);
    }
    
}
