package com.server.service;

import com.server.bean.Judge;
import com.server.repo.JudgeRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JudgeService {

    private final JudgeRepo judgeRepository;

    @Autowired
    public JudgeService(JudgeRepo judgeRepository) {
        this.judgeRepository = judgeRepository;
    }

    public List<Judge> getAllJudges() {
        return judgeRepository.findAll();
    }

    public Optional<Judge> getJudgeById(String id) {
        return judgeRepository.findById(id);
    }

    public Judge addJudge(Judge judge) {
        return judgeRepository.save(judge);
    }

    public Judge updateJudge(String id, Judge updatedJudge) {
        Optional<Judge> optionalExistingJudge = judgeRepository.findById(id);

        if (optionalExistingJudge.isPresent()) {
            Judge existingJudge = optionalExistingJudge.get();

            // Update the fields based on your requirements
            existingJudge.setName(updatedJudge.getName());
            existingJudge.setEmail(updatedJudge.getEmail());

            // Save the updated Judge
            return judgeRepository.save(existingJudge);
        }

        return null; // Judge with the given ID not found
    }

    public void deleteJudge(String id) {
        judgeRepository.deleteById(id);
    }
}
