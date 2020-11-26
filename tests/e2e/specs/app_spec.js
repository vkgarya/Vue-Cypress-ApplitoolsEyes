/// <reference types="cypress" />

const TODO_ITEM_ONE = "Learn some Vue JS";
let TODO_ITEM_TWO = "Create tests with cypress.io";
let TODO_ITEM_THREE = "Apply applitools visual testing";

describe("Todo App Test Suite", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    context("Add todos", () => {
        it.only("should allow me to add todo items", () => {
            // Start the test
            cy.eyesOpen({
                appName: "ToDoMVC",
                testName: "Add todo items",
                browser: { width: 800, height: 600 }
            });

            // create one todo item
            cy.get("[data-cy=todo-input]")
                .type(TODO_ITEM_ONE)
                .type("{enter}");

            // verify the item was added
            cy.get("[data-cy=todo-list] li")
                .eq(0) // first li
                .find("label")
                .should("contain", TODO_ITEM_ONE);

            // Take a snapshot
            cy.eyesCheckWindow("first todo item added");

            // create one todo item
            cy.get("[data-cy=todo-input]")
                .type(TODO_ITEM_TWO)
                .type("{enter}");

            // verify the item was added
            cy.get("[data-cy=todo-list] li")
                .eq(1) // second li
                .find("label")
                .should("contain", TODO_ITEM_TWO);

            // Take a snapshot
            cy.eyesCheckWindow("second todo item added");

            // create one todo item
            cy.get("[data-cy=todo-input]")
                .type(TODO_ITEM_THREE)
                .type("{enter}");

            // verify the item was added
            cy.get("[data-cy=todo-list] li")
                .eq(2) // third li
                .find("label")
                .should("contain", TODO_ITEM_THREE);

            // verify the count is correct
            cy.get("[data-cy=todo-count]").contains("3");

            // Take a snapshot
            cy.eyesCheckWindow("third todo item added");

            // End Test
            cy.eyesClose();
        });

        it("should clear the text input field when an item is added", () => {
            // create one todo item
            cy.get("[data-cy=todo-input]")
                .type(TODO_ITEM_ONE)
                .type("{enter}");

            // verify the input field is cleared
            cy.get("[data-cy=todo-input]").should("have.text", "");
        });
    });
});