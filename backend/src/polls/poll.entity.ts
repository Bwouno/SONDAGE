import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Poll {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  // Stocke un tableau de chaînes de caractères
  @Column('text', { array: true })
  options: string[];

  @Column()
  singleChoice: boolean;

  @Column('text', { array: true })
  votes: string[];

  // Getter pour les options
  getOptions(): string[] {
    return this.options;
  }

  // Setter pour les options
  setOptions(options: string[]): void {
    this.options = options;
  }
}
